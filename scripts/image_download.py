from os import listdir
import re
import requests

i = 57
for file in listdir('.'):
    if not file.endswith('.md'):
        continue
    with open(file, encoding='utf-8') as f:
        fileStr = f.read()

    for img in re.finditer(r'src="(http[^"]+)"', fileStr):
        src = img.group(1)
        try:
            aa = requests.get(src, timeout=3)
            if aa.status_code != 200:
                print('FAIL ', src)
                continue
        except:
            print('FAIL ', src)
            continue
        newImgPath = f'img/web_{i}.{src.split(".")[-1].split("?")[0]}'
        with open(newImgPath, 'wb') as f:
            f.write(aa.content)
        fileStr = fileStr.replace(src, newImgPath)
        i += 1
        print('OK   ', src)

    with open(file, 'w', encoding='utf-8') as f:
        f.write(fileStr)
