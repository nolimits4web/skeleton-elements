import fontforge
import os
import subprocess
import tempfile
import hashlib
import copy

SCRIPT_PATH = os.path.dirname(os.path.abspath(__file__))
SQUARE_PATH = os.path.join(SCRIPT_PATH, 'square.svg')
OUTPUT_FONT_DIR = os.path.join(SCRIPT_PATH, '..', '..', 'src/fonts')
AUTO_WIDTH = False
KERNING = 0
def char_range(arr):
    result = [];
    for m in arr:
        txt = m.split("-")
        for c in range(ord(txt[0]), ord(txt[1])+1):
            result.append(chr(c))
    return result


def split(word):
    return [char for char in word]

m = hashlib.md5()

f = fontforge.font()
f.encoding = 'UnicodeFull'
f.design_size = 28
f.em = 512
f.ascent = 448
f.descent = 64

# Import base characters
hebrew = '\u0590-\u05fe'
arabic = '\u0621-\u064A'
persian = '\u0600-\u06FF'
special = split("_- .,:;/\!/*&'\"|(){}[]")
for char in char_range(['a-z', 'A-Z', '1-9', 'а-я', 'А-Я', arabic, hebrew, persian]) + special:
  glyph = f.createChar(ord(char))
  glyph.importOutlines(SQUARE_PATH)
  glyph.width = 256

font_name = 'skeleton';
m.update(bytes(font_name + ';', "ascii"))

fontfile = '%s/skeleton' % (OUTPUT_FONT_DIR)
build_hash = m.hexdigest()

f.fontname = font_name
f.familyname = font_name
f.fullname = font_name

f.generate(fontfile + '.ttf')

# # Hint the TTF file
subprocess.call('ttfautohint -s -f -n ' + fontfile + '.ttf ' + fontfile + '-hinted.ttf > /dev/null 2>&1 && mv ' + fontfile + '-hinted.ttf ' + fontfile + '.ttf', shell=True)

# WOFF2 Font
subprocess.call('woff2_compress ' + fontfile + '.ttf', shell=True)
