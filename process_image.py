from rembg import remove
from PIL import Image
import urllib.request
import os

input_path = 'public/assets/images/dr-sara-profile.jpeg'
output_path = 'public/assets/images/dr-sara-profile-nobg.png'

print("Opening image...")
input_img = Image.open(input_path)
print("Removing background...")
output_img = remove(input_img)
print("Saving image...")
output_img.save(output_path)
print("Done!")
