def get_tags(tag, lines):
    paths = []
    line_idx = 0
    path=""
    opening_found = False
    opening_tag = "<" + tag
    while line_idx < len(lines):
        if opening_tag in lines[line_idx] and "/>" in lines[line_idx]:
            paths.append(lines[line_idx])
            line_idx = line_idx + 1
        else:
            if opening_tag in lines[line_idx]:
                path = path + lines[line_idx]
                opening_found = True

            elif "/>" in lines[line_idx] and opening_found:
                path = path + lines[line_idx]
                paths.append(path)
                path=""
                opening_found=False
            elif opening_found:
                path = path + lines[line_idx]
                # print(lines[line_idx])

            line_idx = line_idx + 1
    
    return paths

def get_path_attr_loc(word):
    class_attr_idx = int(word.find("class=")) + len("class=")
    d_attr_idx = int(word.find("d=")) + len("d=")
    return class_attr_idx, d_attr_idx

svg_file_path = "../sign_web/src/sign.svg"

f = open(svg_file_path)
f2 = open("path.txt", "w")
paths = get_tags("path", f.readlines())
f2.writelines(paths)
