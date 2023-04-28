import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '3' 

import time
import cv2
import numpy as np
import tensorflow as tf
from PIL import Image

from yolo import YOLO

gpus = tf.config.experimental.list_physical_devices(device_type='GPU')
for gpu in gpus:
    tf.config.experimental.set_memory_growth(gpu, True)
    
if __name__ == "__main__":
    yolo = YOLO()
    #----------------------------------------------------------------------------------------------------------#
    #   mode = ‘predict’  一枚の画像を予測する
    #   mode = ‘video’　動画を予測する
    #   mode = ‘fps’　FPSをテストする
    #   mode = ‘dir_predict’　複数の画像を予測する
    #----------------------------------------------------------------------------------------------------------#
    mode = "predict"
    #----------------------------------------------------------------------------------------------------------#
    #   video_pathはvideoのパスである、video_path=0の場合はカメラを使用
    #   ctrl+cでvideoを保存する
    #----------------------------------------------------------------------------------------------------------#
    video_path      = '/workspace/project/yolox-tf2-main/video/20201105_kabata_long.mp4'
    video_save_path = "/workspace/project/yolox-tf2-main/video_out/kabata_yolox_0.9.avi"
    video_fps       = 25.0

    test_interval   = 100
    #-------------------------------------------------------------------------#
    #   testデータのパスを指定
    #   予測画像を保存するフォルダ
    #-------------------------------------------------------------------------#
    dir_origin_path = "/workspace/project/yolox-tf2-main/none_test"
    dir_save_path   = "/workspace/project/yolox-tf2-main/img_out2"

    if mode == "predict":
        while True:
            img = input('Input image filename:')
            try:
                image = Image.open(img)
            except:
                print('Open Error! Try again!')
                continue
            else:
                r_image = yolo.detect_image(image)
                r_image.save('./output.jpg')
                # r_image.show()

    elif mode == "video":
        capture = cv2.VideoCapture(video_path)
        if video_save_path!="":
            fourcc  = cv2.VideoWriter_fourcc(*'MPEG')
            size    = (int(capture.get(cv2.CAP_PROP_FRAME_WIDTH)), int(capture.get(cv2.CAP_PROP_FRAME_HEIGHT)))
            out     = cv2.VideoWriter(video_save_path, fourcc, video_fps, size)

        fps = 0.0
        while(True):
            t1 = time.time()
            ref,frame=capture.read()
            if not ref:
                break
            # BGRtoRGB
            frame = cv2.cvtColor(frame,cv2.COLOR_BGR2RGB)
            frame = Image.fromarray(np.uint8(frame))
            frame = np.array(yolo.detect_image(frame))
            # RGBtoBGR
            frame = cv2.cvtColor(frame,cv2.COLOR_RGB2BGR)
            
            fps  = ( fps + (1./(time.time()-t1)) ) / 2
            print("fps= %.2f"%(fps))
            frame = cv2.putText(frame, "fps= %.2f"%(fps), (40, 100), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
            
            # cv2.imshow("video",frame)
            # c= cv2.waitKey(1) & 0xff 
            if video_save_path!="":
                out.write(frame)

            # if c==27:
            #     capture.release()
            #     break
        capture.release()
        out.release()
        cv2.destroyAllWindows()

    elif mode == "fps":
        img = Image.open('img/street.jpg')
        tact_time = yolo.get_FPS(img, test_interval)
        print(str(tact_time) + ' seconds, ' + str(1/tact_time) + 'FPS, @batch_size 1')

    elif mode == "dir_predict":
        import os
        from tqdm import tqdm
        
        img_names = os.listdir(dir_origin_path)
        for img_name in tqdm(img_names):
            if img_name.lower().endswith(('.bmp', '.dib', '.png', '.jpg', '.jpeg', '.pbm', '.pgm', '.ppm', '.tif', '.tiff')):
                image_path  = os.path.join(dir_origin_path, img_name)
                image       = Image.open(image_path)
                r_image     = yolo.detect_image(image)
                if not os.path.exists(dir_save_path):
                    os.makedirs(dir_save_path)
                r_image.save(os.path.join(dir_save_path, img_name))
                
    else:
        raise AssertionError("Please specify the correct mode: 'predict', 'video', 'fps' or 'dir_predict'.")
