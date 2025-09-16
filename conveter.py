'''
Converts file formats to webp
Checks size of the output file against the original one 
If less we want to convert that
We assume, .public as the directory with images

'''
import os
from pathlib import Path
from webptools import cwebp
from typing import Tuple, List


formats_to_convert = ['jpeg', 'jpg', 'png'] # file extensions with larger MBs 

def folder_items(foldername)->Tuple[str, List[str]]:
    dir_name = os.path.dirname(__file__) # this is platform dependent, todo!
    folder = os.path.join(dir_name, foldername)
    if (os.path.isdir(folder)):
        files = os.listdir(folder)
        return (folder,files)
    
    
def get_folder_contents(foldername):
    folder, files = folder_items(foldername)
    for file in files:
        name, ext = file.split('.')
        if ext in formats_to_convert:
            file_path = f"{folder}\\{file}"
            stats = os.stat(file_path)
            print(f"file: {file}, stats: {stats.st_size} dir: {os.path.dirname(__file__)}")
            print(cwebp(input_image=file_path, output_image=f"{foldername}\\{name}.webp", option="-q 80", logging="-v"))
            print("Done converting!")
            #check saving from convertion 
            new_stat = os.stat(f'{folder}\\{name}.webp').st_size
            savings = ((stats.st_size - new_stat)/stats.st_size)*100
            print(f'percentage saving is: {savings}')
            
    

if __name__ == "__main__":
    get_folder_contents('public')