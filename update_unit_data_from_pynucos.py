#!/usr/bin/env python

"""
A script that grabs the unit data from pyNUCOS, and injects it into
the nucos.js script

Better than hand_updating

One of these days, I suppose we could even make this an automatic step on the CI

NOTE: make sure to have the latest pyNUCOS before running this script
"""
import shutil
import nucos

nucos.unit_data.dump_to_json("temp_unit_data.json")
unit_data = open("temp_unit_data.json", encoding="utf-8").read()

with open("nucos.js", encoding="utf-8") as js, \
     open("nucos_temp.js", 'w', encoding="utf-8") as js2:

    # look for the unit data:
    for line in js:
        js2.write(line)
        if line.strip() == "// BEGIN UNIT_DICT DECLARATION":
            break
    # find end of unit declaration
    for line in js:
        if line.strip() == "// END UNIT_DICT DECLARATION":
            break

    # dump the new unit data into the file
    js2.write("\nvar unitDict =\n")
    js2.write(unit_data)
    js2.write(";\n\n// END UNIT_DICT DECLARATION\n")

    # transfer the rest of the file
    for line in js:
        js2.write(line)

# copy the temp one over the original
shutil.copy("nucos_temp.js", "nucos.js")

