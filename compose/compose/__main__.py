import os
import subprocess
from argparse import ArgumentParser, ArgumentTypeError

def componentName(name):
    if not name[0].isupper():
        raise ArgumentTypeError("React component should start with uppercase!")
    return name

def make_folder(name):
    root = name
    os.mkdir(name)
    files = ['{}.js'.format(name), '{}.module.css'.format(name), 'index.js', 'utils.js']
    for file in files:
        subprocess.call(['touch', os.path.join(root, file)])
    with open(os.path.join(root, 'index.js'), 'w') as file:
        file.write("export {{ default }} from './{}.js'".format(name))
    with open(os.path.join(root, '{}.js'.format(name)), 'w') as file:
        content = ''
        content += "import React from 'react';\n"
        content += "import css from './{}.module.css';\n\n".format(name)
        content += "class {} extends React.Component{{\n\n".format(name)
        content += "    render(){\n"
        content += "        return(\n"
        content += "            <div>\n"
        content += "            </div>\n"
        content += "        )\n"
        content += "    }\n"
        content += "};\n\n"
        content += "export default {};\n".format(name)
        file.write(content)

def main():
    parser = ArgumentParser()
    parser.add_argument("name", type = componentName, help = "Name of components folder.")
    args = parser.parse_args()
    make_folder(args.name)

if __name__ == "__main__":
    main()