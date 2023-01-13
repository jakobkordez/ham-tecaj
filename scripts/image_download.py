from os import listdir
import re
import requests

i = 0
for file in listdir('.'):
    if not file.endswith('.md'):
        continue
    with open(file, encoding='utf-8') as f:
        print(file)
        for img in re.finditer(r'src="(http[^"]+)"', f.read()):
            src = img.group(1)
            try:
                aa = requests.get(src)
                if aa.status_code != 200:
                    print('FAIL ', src)
                    continue
            except:
                print('FAIL ', src)
                continue
            with open(f'img/web_{i}.{src.split(".")[-1].split("?")[0]}', 'wb') as f:
                f.write(aa.content)
            i += 1
            print('OK   ', src)
