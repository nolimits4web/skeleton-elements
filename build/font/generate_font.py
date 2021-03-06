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
SPECIAL_CHARS = "_- .,:;/\!/*&'\"|(){}[]"
def char_range(arr):
    result = [];
    for m in arr:
        txt = m.split("-")
        for c in range(ord(txt[0]), ord(txt[1])+1):
            result.append(chr(c))
    return result

def split(word):
    return [char for char in word]

def generate_font(name, font_arr):
  m = hashlib.md5()

  f = fontforge.font()
  f.encoding = 'UnicodeFull'
  f.design_size = 28
  f.em = 512
  f.ascent = 448
  f.descent = 64

  for char in font_arr:
    glyph = f.createChar(ord(char))
    glyph.importOutlines(SQUARE_PATH)
    glyph.width = 256

  font_name = 'skeleton';
  m.update(bytes(font_name + ';', "ascii"))

  fontfile = '%s/skeleton%s' % (OUTPUT_FONT_DIR, name)
  print(fontfile);

  f.fontname = font_name
  f.familyname = font_name
  f.fullname = font_name

  f.generate(fontfile + '.ttf')

  # # Hint the TTF file
  subprocess.call('ttfautohint -s -f -n ' + fontfile + '.ttf ' + fontfile + '-hinted.ttf > /dev/null 2>&1 && mv ' + fontfile + '-hinted.ttf ' + fontfile + '.ttf', shell=True)

  # WOFF2 Font
  subprocess.call('woff2_compress ' + fontfile + '.ttf', shell=True)

generate_font('', char_range(['a-z', 'A-Z', '0-9']) + split(SPECIAL_CHARS)) # english
generate_font('-ru', char_range(['а-я', 'А-Я', '0-9']) + split(SPECIAL_CHARS)) #russian
generate_font('-il', char_range(['\u0590-\u05fe', '0-9']) + split(SPECIAL_CHARS)) # hebrew
generate_font('-ar', char_range(['\u0621-\u064A', '0-9']) + split(SPECIAL_CHARS)) # arabic
generate_font('-fa', char_range(['\u0600-\u06FF', '0-9']) + split(SPECIAL_CHARS)) # persian
