#!/usr/bin/env python3
import re

path = '/Users/kairen/Desktop/交互式页面/data_fixed.js'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# 检查特殊引号
problematic_titles = [
    "CHARTEDIT: How Far Are MLLMs From Automating Chart Analysis? Evaluating MLLMs\u2019 Capability via Chart Editing",
    "Is GPT-4V (ision) All You Need for Automating Academic Data Visualization? Exploring Vision-Language Models\u2019 Capability in Reproducing Academic Charts",
    "nvbench 2.0: Resolving ambiguity in text-to-visualization through stepwise reasoning"
]

for title in problematic_titles:
    # 在文件中查找
    escaped = re.escape(title)
    match = re.search(escaped, content)
    if match:
        print(f"FOUND: {title[:60]}")
    else:
        print(f"NOT FOUND: {title[:60]}")
        # 尝试变体
        # 查找包含关键字的行
        for line in content.split('\n'):
            if 'CHARTEDIT' in line and 'MLLMs' in line:
                print(f"  -> File has: {repr(line[:80])}")
                break
            if 'GPT-4V' in line and 'All You Need' in line:
                print(f"  -> File has: {repr(line[:80])}")
                break
            if 'nvbench 2.0' in line:
                print(f"  -> File has: {repr(line[:80])}")
                break
