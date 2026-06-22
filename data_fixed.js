const papers = [
  {
    "title": "A Pragmatics-based Approach to Proactive Digital Assistants for Data Exploration",
    "image": "figure/A Pragmatics-based Approach to Proactive Digital Assistants for Data Exploration.png",
    "year": "2025",
    "keywords": "Proactive Digital Assistant\nData Exploration\nPragmatics\nNatural Language Interfaces\nNLI\nHuman Computer Interaction\nHCI\nData Visualization\nUser Study\nComparative Analysis",
    "abstract": "Recent advances in Natural Language Interfaces (NLIs) and Large Language Models (LLMs) have transformed the way we tackle NLP tasks, shifting the focus towards a more Pragmatics-based perspective. This shift enables more natural interactions between humans and voice assistants, which have historically been difficult to achieve. Pragmatics involves understanding how users often speak out of turn, interrupt one another, or provide relevant information without being explicitly asked (maxim of quantity). To explore this, we developed a digital assistant that continuously listens to conversations and proactively generates relevant visualizations during data exploration tasks. In a within-subject study, participants interacted with both proactive and non-proactive versions of a voice assistant while exploring the Hawaii Climate Data Portal (HCDP). Results suggest that interaction with the proactive assistant increased the total number of utterances and discoveries, facilitated quicker and more reliable insights, and led to greater usage of the system's chart capabilities. Our study highlights the potential of proactive AI in NLIs and identifies key challenges in its implementation, offering insights for future research.",
    "code_link": "",
    "doi": "https://dl.acm.org/doi/full/10.1145/3719160.3736632",
    "categories": [
      "Visualization Recommendation",
      "Interaction Generation and Recommendation",
      "Multimodal Interaction Perception"
    ],
    "authors": "Roderick S. Tabalba, Christopher J. Lee, Giorgio Tran, Nurit Kirshenbaum, Jason Leigh"
  },
  {
    "title": "A Review and Collation of Graphical Perception Knowledge for Visualization Recommendation",
    "image": "figure/A Review and Collation of Graphical Perception Knowledge for Visualization Recommendation.png",
    "year": "2023",
    "keywords": "Literature Review\nHuman Perception\nVisualization Design",
    "abstract": "Selecting appropriate visual encodings is critical to designing effective visualization recommendation systems, yet few findings from graphical perception are typically applied within these systems. We observe two significant limitations in translating graphical perception knowledge into actionable visualization recommendation rules/constraints: inconsistent reporting of findings and a lack of shared data across studies. How can we translate the graphical perception literature into a knowledge base for visualization recommendation? We present a review of 59 papers that study user perception and performance across ten visual analysis tasks. Through this study, we contribute a JSON dataset that collates existing theoretical and experimental knowledge and summarizes key study outcomes in graphical perception. We illustrate how this dataset can inform automated encoding decisions with three representative visualization recommendation systems. Based on our findings, we highlight open challenges and opportunities for the community in collating graphical perception knowledge for a range of visualization recommendation scenarios.",
    "code_link": "",
    "doi": "https://dl.acm.org/doi/full/10.1145/3544548.3581349",
    "categories": [
      "Visualization Recommendation"
    ],
    "authors": "Zehua Zeng, Leilani Battle"
  },
  {
    "title": "A Survey on (M)LLM-Based GUI Agents",
    "image": "figure/A Survey on (M)LLM-Based GUI Agents.png",
    "year": "2025",
    "keywords": "GUI Agent, Multimodal LLM, Automation, Human-Computer Interaction, Perception, Planning, Evaluation",
    "abstract": "Graphical User Interface (GUI) Agents have emerged as a transformative paradigm in human-computer interaction, evolving from rule-based automation scripts to sophisticated AI-driven systems capable of understanding and executing complex interface operations. This survey provides a comprehensive examination of the rapidly advancing field of LLM-based GUI Agents, systematically analyzing their architectural foundations, technical components, and evaluation methodologies. We identify and analyze four fundamental components that constitute modern GUI Agents: (1) perception systems that integrate text-based parsing with multimodal understanding for comprehensive interface comprehension; (2) exploration mechanisms that construct and maintain knowledge bases through internal modeling, historical experience, and external information retrieval; (3) planning frameworks that leverage advanced reasoning methodologies for task decomposition and execution; and (4) interaction systems that manage action generation with robust safety controls. Through rigorous analysis of these components, we reveal how recent advances in large language models and multimodal learning have revolutionized GUI automation across desktop, mobile, and web platforms. We critically examine current evaluation frameworks, highlighting methodological limitations in existing benchmarks while proposing directions for standardization. This survey also identifies key technical challenges, including accurate element localization, effective knowledge retrieval, long-horizon planning, and safety-aware execution control, while outlining promising research directions for enhancing GUI Agents' capabilities. Our systematic review provides researchers and practitioners with a thorough understanding of the field's current state and offers insights into future developments in intelligent interface automation.",
    "code_link": "",
    "doi": "https://arxiv.org/abs/2504.13865",
    "categories": [
      "Multimodal Interaction Perception",
      "Interaction Generation and Recommendation",
      "Agentic Visual Analytics"
    ],
    "authors": "Fei Tang, Haolei Xu, Hang Zhang, Siqi Chen, Xingyu Wu, Yongliang Shen, Wenqi Zhang, Guiyang Hou, Zeqi Tan, Yuchen Yan, Kaitao Song, Jian Shao, Weiming Lu, Jun Xiao, Yueting Zhuang"
  },
  {
    "title": "A Systematic Review of Visualization Recommendation Systems: Goals, Strategies, Interfaces, and Evaluations",
    "image": "figure/A Systematic Review of Visualization Recommendation Systems- Goals, Strategies, Interfaces, and Evaluations.png",
    "year": "2024",
    "keywords": "Visualization Recommendation, Literature Review, Design Goals, User Interface, Evaluation",
    "abstract": "Visualization recommendation systems help data analysts navigate large, complex datasets by generating visualizations of meaningful patterns, outliers, and insights that could influence downstream decision-making. However, recommendations can easily mislead or confuse analysts when they are not developed with care. In this survey, we review how visualization recommendation systems have been designed over the last 25 years and classify them by their underlying recommendation goals and high-level implementation strategies, including the user interfaces provided for navigating and interpreting the recommended visualizations. To understand their efficacy, we also review how visualization recommendation systems are evaluated in the literature. Given these observations, we present several open challenges and promising directions for future work in designing effective visualization recommendation systems.",
    "code_link": "",
    "doi": "https://www.emerald.com/ftdbs/article-abstract/14/1/1/1320827/A-Systematic-Review-of-Visualization?redirectedFrom=fulltext",
    "categories": [
      "Visualization Recommendation"
    ],
    "authors": "Zehua Zeng, Leilani Battle"
  },
  {
    "title": "ASKCHART: UNIVERSAL CHART UNDERSTANDING THROUGH TEXTUAL ENHANCEMENT",
    "image": "figure/ASKCHART- UNIVERSAL CHART UNDERSTANDINGTHROUGH TEXTUAL ENHANCEMENT.png",
    "year": "2024",
    "keywords": "Chart Understanding  \nTextual Enhancement  \nMixture of Experts (MoE)  \nChartBank Dataset  \nChartQA  \nChart-to-Text  \nChart-to-Table  \nMultimodal Learning",
    "abstract": "Chart understanding tasks such as ChartQA and Chart-to-Text involve automatically extracting and interpreting key information from charts,enabling users to query or convert visual data into structured formats.State-of-the-art approaches primarily focus on visual cues from chart images,failing to explicitly incorporate rich textual information (e.g.,data labels and axis labels)embedded within the charts.This textual information is vital for intuitive human comprehension and interpretation of charts.Moreover,existing models are often large and computationally intensive,limiting their practical applicability.In this paper,we introduce AskChart,a universal model that explicitly integrates both textual and visual cues from charts using a Mixture of Experts (MoE)architecture.AskChart facilitates the learning of enhanced visual-textual representations of charts for effectively handling multiple chart understanding tasks,while maintaining a smaller model size.To capture the synergy between visual and textual modalities,we curate a large-scale dataset named ChartBank with about 7.5M data samples,which helps align textual and visual information and facilitates the extraction of visual entities and text.To effectively train AskChart,we design a three-stage training strategy to align visual and textual modalities for learning robust visual-textual representations and optimizing the learning of the MoE layer.Extensive experiments across five datasets demonstrate the significant performance gains of AskChart in four chart understanding tasks.Remarkably,AskChart with 4.6B parameters outperforms state-of-the-art models with 13B parameters by 68.3%in Open-ended ChartQA and 49.2%in Chart-to-Text tasks,while achieving comparable performance in ChartQA and Chart-to-Table tasks.",
    "code_link": "https://github.com/Sootung/AskChart",
    "doi": "https://arxiv.org/abs/2412.19146",
    "categories": [
      "Low-level Information Perception",
      "High-level Semantic Cognition"
    ],
    "authors": "Xudong Yang, Yifan Wu, Yizhang Zhu, Nan Tang, Yuyu Luo"
  },
  {
    "title": "AVA: Towards Autonomous Visualization Agents through Visual Perception-Driven Decision-Making",
    "image": "figure/AVA- Towards Autonomous Visualization Agents through VisualPerception-Driven Decision-Making.png",
    "year": "2024",
    "keywords": "Computer Graphics\nVisualization\nAutonomous Visualization Agents\nVisual Perception\nDecision-Making\nLarge Language Models",
    "abstract": "With recent advances in multi-modal foundation models, the previously text-only large language models (LLM) have evolved to incorporate visual input, opening up unprecedented opportunities for various applications in visualization. Compared to existing work on LLM-based visualization works that generate and control visualization with textual input and output only, the proposed approach explores the utilization of the visual processing ability of multi-modal LLMs to develop Autonomous Visualization Agents (AVAs) that can evaluate the generated visualization and iterate on the result to accomplish user-defined objectives defined through natural language. We propose the first framework for the design of AVAs and present several usage scenarios intended to demonstrate the general applicability of the proposed paradigm. Our preliminary exploration and proof-of-concept agents suggest that this approach can be widely applicable whenever the choices of appropriate visualization parameters require the interpretation of previous visual output. Our study indicates that AVAs represent a general paradigm for designing intelligent visualization systems that can achieve high-level visualization goals, which pave the way for developing expert-level visualization agents in the future.",
    "code_link": "",
    "doi": "https://openurl.ebsco.com/EPDB%3Agcd%3A8%3A13739960/detailv2?sid=ebsco%3Aplink%3Ascholar&id=ebsco%3Agcd%3A177903236&crl=c&link_origin=scholar.google.com",
    "categories": [
      "Conditional Visualization Synthesis"
    ],
    "authors": "Shusen Liu, Haichao Miao, Zhimin Li, Matthew Olson, Valerio Pascucci, Peer-Timo Bremer"
  },
  {
    "title": "Advancing Multimodal Large Language Models in Chart Question Answering with Visualization-Referenced Instruction Tuning",
    "image": "figure/Advancing Multimodal Large Language Models in Chart Question Answering with Visualization-Referenced Instruction Tuning.png",
    "year": "2025",
    "keywords": "Multimodal Large Language Models\nChart Question Answering\nVisualization-referenced Instruction Tuning\nData Augmentation\nBenchmark",
    "abstract": "Emerging multimodal large language models (MLLMs) exhibit great potential for chart question answering (CQA). Recent efforts primarily focus on scaling up training datasets (i.e., charts, data tables, and question-answer (QA) pairs) through data collection and synthesis. However, our empirical study on existing MLLMs and CQA datasets reveals notable gaps. First, current data collection and synthesis focus on data volume and lack consideration of fine-grained visual encodings and QA tasks, resulting in unbalanced data distribution divergent from practical CQA scenarios. Second, existing work follows the training recipe of the base MLLMs initially designed for natural images, under-exploring the adaptation to unique chart characteristics, such as rich text elements. To fill the gap, we propose a visualization-referenced instruction tuning approach to guide the training dataset enhancement and model development. Specifically, we propose a novel data engine to effectively filter diverse and high-quality data from existing datasets and subsequently refine and augment the data using LLM-based generation techniques to better align with practical QA tasks and visual encodings. Then, to facilitate the adaptation to chart characteristics, we utilize the enriched data to train an MLLM by unfreezing the vision encoder and incorporating a mixture-of-resolution adaptation strategy for enhanced fine-grained recognition. Experimental results validate the effectiveness of our approach. Even with fewer training examples, our model consistently outperforms state-of-the-art CQA models on established benchmarks. We also contribute a dataset split as a benchmark for future research. Source codes and datasets of this paper are available at https://github.com/zengxingchen/ChartQA-MLLM.",
    "code_link": "https://github.com/zengxingchen/ChartQA-MLLM",
    "doi": "https://doi.org/10.1109/TVCG.2024.3456159",
    "categories": [
      "High-level Semantic Cognition"
    ],
    "authors": "Xingchen Zeng, Haichuan Lin, Yilin Ye, Wei Zeng"
  },
  {
    "title": "An Empirical Evaluation of the GPT-4 Multimodal Language Model on Visualization Literacy Tasks",
    "image": "figure/An Empirical Evaluation of the GPT-4 Multimodal Language Model on Visualization Literacy Tasks.png",
    "year": "2025",
    "keywords": "Visualization Literacy\nLarge Language Models\nNatural Language",
    "abstract": "Large Language Models (LLMs)like GPT-4which support multimodal input (i.e.,prompts containing images in addition to text)have immense potential to advance visualization research.However,many questions exist about the visual capabilities of such models,including how well they can read and interpret visually represented data.In our work,we address this question by evaluating the GPT-4multimodal LLM using a suite of task sets meant to assess the model's visualization literacy.The task sets are based on existing work in the visualization community addressing both automated chart question answering and human visualization literacy across multiple settings.Our assessment finds that GPT-4can perform tasks such as recognizing trends and extreme values,and also demonstrates some understanding of visualization design best-practices.By contrast,GPT-4struggles with simple value retrieval when not provided with the original dataset,lacks the ability to reliably distinguish between colors in charts,and occasionally suffers from hallucination and inconsistency.We conclude by reflecting on the model's strengths and weaknesses as well as the potential utility of models like GPT-4for future visualization research.We also release all code,stimuli,and results for the task sets at the following link:https://doi.org/10.17605/OSF.IO/F39J6",
    "code_link": "https://osf.io/f39j6/overview",
    "doi": "https://ieeexplore.ieee.org/abstract/document/10670574",
    "categories": [
      "High-level Semantic Cognition"
    ],
    "authors": "Alexander Bendeck, John Stasko"
  },
  {
    "title": "An Evaluation-Focused Framework for Visualization Recommendation Algorithms",
    "image": "figure/An Evaluation-Focused Framework for Visualization Recommendation Algorithms.png",
    "year": "2021",
    "keywords": "Visualization Recommendation, Evaluation Framework, Algorithm Comparison, Design Space, Oracle",
    "abstract": "Although we have seen a proliferation of algorithms for recommending visualizations, these algorithms are rarely compared with one another, making it difficult to ascertain which algorithm is best for a given visual analysis scenario. Though several formal frameworks have been proposed in response, we believe this issue persists because visualization recommendation algorithms are inadequately specified from an evaluation perspective. In this paper, we propose an evaluation-focused framework to contextualize and compare a broad range of visualization recommendation algorithms. We present the structure of our framework, where algorithms are specified using three components: (1) a graph representing the full space of possible visualization designs, (2) the method used to traverse the graph for potential candidates for recommendation, and (3) an oracle used to rank candidate designs. To demonstrate how our framework guides the formal comparison of algorithmic performance, we not only theoretically compare five existing representative recommendation algorithms, but also empirically compare four new algorithms generated based on our findings from the theoretical comparison. Our results show that these algorithms behave similarly in terms of user performance, highlighting the need for more rigorous formal comparisons of recommendation algorithms to further clarify their benefits in various analysis scenarios.",
    "code_link": "",
    "doi": "https://ieeexplore.ieee.org/abstract/document/9552925",
    "categories": [
      "Visualization Recommendation"
    ],
    "authors": "Zehua Zeng, Phoebe Moh, Fan Du, Jane Hoffswell, Tak Yeon Lee, Sana Malik, Eunyee Koh, Leilani Battle"
  },
  {
    "title": "Automated Data Visualization from Natural Language via Large Language Models: An Exploratory Study",
    "image": "figure/Automated Data Visualization from Natural Language via Large Language Models- An Exploratory Study​.png",
    "year": "2024",
    "keywords": "NL2Vis, Natural Language Interface, LLM, Visualization Generation, In-context Learning, Text-to-Visualization",
    "abstract": "The Natural Language to Visualization (NL2Vis) task aims to transform natural-language descriptions into visual representations for a grounded table, enabling users to gain insights from vast amounts of data. Recently, many deep learning-based approaches have been developed for NL2Vis. Despite the considerable efforts made by these approaches, challenges persist in visualizing data sourced from unseen databases or spanning multiple tables. Taking inspiration from the remarkable generation capabilities of Large Language Models (LLMs), this paper conducts an empirical study to evaluate their potential in generating visualizations, and explore the effectiveness of in-context learning prompts for enhancing this task. In particular, we first explore the ways of transforming structured tabular data into sequential text prompts, as to feed them into LLMs and analyze which table content contributes most to the NL2Vis. Our findings suggest that transforming structured tabular data into programs is effective, and it is essential to consider the table schema when formulating prompts. Furthermore, we evaluate two types of LLMs: finetuned models (e.g., T5-Small) and inference-only models (e.g., GPT-3.5), against state-of-the-art methods, using the NL2Vis benchmarks (i.e., nvBench). The experimental results reveal that LLMs outperform baselines, with inference-only models consistently exhibiting performance improvements, at times even surpassing fine-tuned models when provided with certain few-shot demonstrations through in-context learning. Finally, we analyze when the LLMs fail in NL2Vis, and propose to iteratively update the results using strategies such as chain-of-thought, role-playing, and code-interpreter. The experimental results confirm the efficacy of iterative updates and hold great potential for future study.",
    "code_link": "",
    "doi": "https://dl.acm.org/doi/abs/10.1145/3654992",
    "categories": [
      "Conditional Visualization Synthesis"
    ],
    "authors": "Yang Wu, Yao Wan, Hongyu Zhang, Yulei Sui, Wucai Wei, Wei Zhao, Guandong Xu, Hai Jin"
  },
  {
    "title": "Automated Visualization Code Synthesis via Multi-Path Reasoning and Feedback-Driven Optimizations",
    "image": "figure/Automated Visualization Code Synthesis via Multi-PathReasoning and Feedback-Driven Optimizations.png",
    "year": "2026",
    "keywords": "Visualization code generation  \nText-to-visualization  \nMulti-path reasoning  \nVisual feedback  \nVision-language models  \nCode synthesis",
    "abstract": "Large Language Models (LLMs) have become a cornerstone for automated visualization code generation, enabling users to create charts through natural language instructions. Despite improvements from techniques like few-shot prompting and query expansion, existing methods often struggle when requests are underspecified in actionable details (e.g., data preprocessing assumptions, solver or library choices, etc.), frequently necessitating manual intervention. To overcome these limitations, we propose VisPath: a Multi-Path Reasoning and Feedback-Driven Optimization Framework for Visualization Code Generation. VisPath handles underspecified queries through structured, multi-stage processing. It begins by using Chain-of-Thought (CoT) prompting to reformulate the initial user input, generating multiple extended queries in parallel to surface alternative plausible concretizations of the request. These queries then generate candidate visualization scripts, which are executed to produce diverse images. By assessing the visual quality and correctness of each output, VisPath generates targeted feedback that is aggregated to synthesize an optimal final result. Extensive experiments on MatPlotBench and Qwen-Agent Code Interpreter Benchmark show that VisPath outperforms state-of-the-art methods, providing a more reliable framework for AI-driven visualization.",
    "code_link": "https://github.com/leesy7197/vispath",
    "doi": "https://arxiv.org/abs/2502.11140",
    "categories": [
      "Conditional Visualization Synthesis"
    ],
    "authors": "Wonduk Seo, Daye Kang, Hyunjin An, Taehan Kim, Soohyuk Cho, Seungyong Lee, Minhyeong Yu, Jian Park, Yi Bu, Seunghyun Lee"
  },
  {
    "title": "Autonomous GIS: the next-generation AI-powered GIS",
    "image": "figure/Autonomous GIS- the next-generation AI-powered GIS.png",
    "year": "2023",
    "keywords": "Autonomous GIS, LLM, Spatial Analysis, AI-powered GIS, ChatGPT, Geographic Information Systems",
    "abstract": "Large Language Models (LLMs), such as ChatGPT, demonstrate a strong understanding of human natural language and have been explored and applied in various fields, including reasoning, creative writing, code generation, translation, and information retrieval. By adopting LLM as the reasoning core, we introduce Autonomous GIS as an AI-powered geographic information system (GIS) that leverages the LLM's general abilities in natural language understanding, reasoning, and coding for addressing spatial problems with automatic spatial data collection, analysis, and visualization. We envision that autonomous GIS will need to achieve five autonomous goals: self-generating, self-organizing, self-verifying, self-executing, and self-growing. We developed a prototype system called LLM-Geo using the GPT-4 API, demonstrating what an autonomous GIS looks like and how it delivers expected results without human intervention using three case studies. For all case studies, LLM-Geo returned accurate results, including aggregated numbers, graphs, and maps.. Although still in its infancy and lacking several important modules such as logging and code testing, LLM-Geo demonstrates a potential path toward the next-generation AI-powered GIS. We advocate for the GIScience community to devote more efforts to the research and development of autonomous GIS, making spatial analysis easier, faster, and more accessible to a broader audience.",
    "code_link": "",
    "doi": "https://www.tandfonline.com/doi/full/10.1080/17538947.2023.2278895",
    "categories": [
      "Agentic Visual Analytics"
    ],
    "authors": "Zhenlong Li, Huan Ning"
  },
  {
    "title": "BIGCHARTS-R1: Enhanced Chart Reasoning with Visual Reinforcement Finetuning",
    "image": "figure/BIGCHARTS-R1- Enhanced Chart Reasoning with Visual Reinforcement Finetuning.png",
    "year": "2025",
    "keywords": "Chart Reasoning\nVisual Reinforcement Finetuning\nBIGCHARTS Dataset\nGroup Relative Policy Optimization (GRPO)\nChart Question Answering",
    "abstract": "Charts are essential to data analysis, transforming raw data into clear visual representations that support human decision-making. Although current vision-language models (VLMs) have made significant progress, they continue to struggle with chart comprehension due to training on datasets that lack diversity and real-world authenticity, or on automatically extracted underlying data tables of charts, which can contain numerous estimation errors. Furthermore, existing models only rely on supervised fine-tuning using these low-quality datasets, severely limiting their effectiveness. To address these issues, we first propose BigCharts, a dataset creation pipeline that generates visually diverse chart images by conditioning the rendering process on real-world charts sourced from multiple online platforms. Unlike purely synthetic datasets, BigCharts incorporates real-world data, ensuring authenticity and visual diversity, while still retaining accurate underlying data due to our proposed replotting process. Additionally, we introduce a comprehensive training framework that integrates supervised fine-tuning with Group Relative Policy Optimization (GRPO)-based reinforcement learning. By introducing novel reward signals specifically designed for chart reasoning, our approach enhances model robustness and generalization across diverse chart styles and domains, resulting in a state-of-the-art chart reasoning model, BigCharts-R1. Extensive experiments demonstrate that our models surpass existing methods on multiple chart question-answering benchmarks compared to even larger open-source and closed-source models.",
    "code_link": "https://github.com/ServiceNow/BigCharts-R1",
    "doi": "https://openreview.net/forum?id=19fydz1QnW",
    "categories": [
      "High-level Semantic Cognition"
    ],
    "authors": "Ahmed Masry, Abhay Puri, Masoud Hashemi, Juan A. Rodriguez, Megh Thakkar, Khyati Mahajan, Vikas Yadav, Sathwik Tejaswi Madhusudhan, Alexandre Piche, Dzmitry Bahdanau, Christopher Pal, David Vazquez, Enamul Hoque, Perouz Taslakian, Sai Rajeswar, Spandana Gella"
  },
  {
    "title": "Bavisitter: Integrating Design Guidelines into Large Language Models for Visualization Authoring",
    "image": "figure/Bavisitter- Integrating Design Guidelines into Large Language Models for Visualization Authoring.png",
    "year": "2024",
    "keywords": "Automated Visualization  \nVisualization Tools  \nLarge Language Models  \nVisualization Authoring  \nDesign Guidelines  \nNatural Language Interfaces",
    "abstract": "Large Language Models (LLMs) have demonstrated remarkable versatility in visualization authoring, but often generate suboptimal designs that are invalid or fail to adhere to design guidelines for effective visualization. We present Bavisitter, a natural language interface that integrates established visualization design guidelines into LLMs. Based on our survey on the design issues in LLM-generated visualizations, Bavisitter monitors the generated visualizations during a visualization authoring dialogue to detect an issue. When an issue is detected, it intervenes in the dialogue, suggesting possible solutions to the issue by modifying the prompts. We also demonstrate two use cases where Bavisitter detects and resolves design issues from the actual LLM-generated visualizations.",
    "code_link": "https://github.com/jiwnchoi/Bavisitter",
    "doi": "https://ieeexplore.ieee.org/abstract/document/10771142",
    "categories": [
      "Conditional Visualization Synthesis"
    ],
    "authors": "Jiwon Choi, Jaeung Lee, Jaemin Jo"
  },
  {
    "title": "Beyond Generating Code: Evaluating GPT on a Data Visualization Course",
    "image": "figure/Beyond Generating Code- Evaluating GPT on a Data Visualization Course.png",
    "year": "2023",
    "keywords": "Data Visualization  \nGenerative Pre-trained Transformer (GPT)  \nCS171  \nData Cleanup  \nInteractive Visualization  \nInsight Communication",
    "abstract": "This paper presents an empirical evaluation of the performance of the Generative Pre-trained Transformer (GPT)model in Harvard's CS171data visualization course.While previous studies have focused on GPT's ability to generate code for visualizations,this study goes beyond code generation to evaluate GPT's abilities in various visualization tasks,such as data interpretation,visualization design,visual data exploration,and insight communication.The evaluation utilized GPT-3.5and GPT-4through the APIs of OpenAI to complete assignments of CS171,and included a quantitative assessment based on the established course rubrics,a qualitative analysis informed by the feedback of three experienced graders,and an exploratory study of GPT's capabilities in completing border visualization tasks.Findings show that GPT-4scored 80%on quizzes and homework,and Teaching Fellows could distinguish between GPTand human-generated homework with 70%accuracy.The study also demonstrates GPT's potential in completing various visualization tasks,such as data cleanup,interaction with visualizations,and insight communication.The paper concludes by discussing the strengths and limitations of GPT in data visualization,potential avenues for incorporating GPT in broader visualization tasks,and the need to redesign visualization education.",
    "code_link": "https://github.com/GPT4VIS/GPT-4-CS171",
    "doi": "https://ieeexplore.ieee.org/abstract/document/10344146",
    "categories": [
      "High-level Semantic Cognition",
      "Conditional Visualization Synthesis",
      "Multi-view and Narrative Visualization Composition",
      "Interaction Generation and Recommendation",
      "Agentic Visual Analytics"
    ],
    "authors": "Zhutian Chen, Chenyang Zhang, Qianwen Wang, Jakob Troidl, Simon Warchol, Johanna Beyer, Nils Gehlenborg, Hanspeter Pfister"
  },
  {
    "title": "Boosting Chart-to-Code Generation in MLLM via Dual Preference-Guided Refinement",
    "image": "figure/Boosting Chart-to-Code Generation in MLLM via Dual Preference-Guided Refinement.png",
    "year": "2025",
    "keywords": "Multimodal Large Language Model  \nChart-to-Code Generation  \nOffline Reinforcement Learning  \nReward",
    "abstract": "Translating chart images into executable plotting scripts-referred to as the chart-to-code generation task-requires Multimodal Large Language Models (MLLMs) to perform fine-grained visual parsing, precise code synthesis, and robust cross-modal reasoning. However, this task is inherently under-constrained: multiple valid code implementations can produce the same visual chart, and evaluation must consider both code correctness and visual fidelity across diverse dimensions. This makes it difficult to learn accurate and generalizable mappings through standard supervised fine-tuning. To address these challenges, we propose a dual preference-guided refinement framework that combines a feedback-driven, dual-modality reward mechanism with iterative preference learning. Our approach introduces a structured variant generation strategy and a visual reward model to efficiently produce high-quality, aspect-aware preference pairs-making preference collection scalable and supervision more targeted. These preferences are used in an offline reinforcement learning setup to optimize the model toward multi-dimensional fidelity. Experimental results show that our framework significantly enhances the performance of general-purpose open-source MLLMs, enabling them to generate high-quality plotting code that rivals specialized chart-centric models and even some proprietary systems. The code and datasets are publicly available at https://github.com/Zhihan72/Chart2Code.",
    "code_link": "https://github.com/Zhihan72/Chart2Code",
    "doi": "https://dl.acm.org/doi/abs/10.1145/3746027.3755596",
    "categories": [
      "Code-level Visualization Reconstruction"
    ],
    "authors": "Zhihan Zhang, Yixin Cao, Lizi Liao"
  },
  {
    "title": "CHARTCAP: Mitigating Hallucination of Dense Chart Captioning",
    "image": "figure/CHARTCAP- Mitigating Hallucination of Dense Chart Captioning.png",
    "year": "2025",
    "keywords": "Chart Captioning  \nVisual Language Models  \nHallucination Mitigation  \nLarge-scale Dataset  \nCycle Consistency Verification  \nVisual Consistency Score",
    "abstract": "Generating accurate, informative, and hallucination-free captions for charts remains challenging for vision language models, primarily due to the lack of large-scale, high-quality datasets of real-world charts. However, existing real-world chart datasets suffer from the inclusion of extraneous information that cannot be inferred from the chart and failure to sufficiently capture structural elements and key insights. Therefore, we introduce ChartCap, a large-scale dataset of 565K real-world chart images paired with type-specific, dense captions that exclude extraneous information and highlight both structural elements and key insights in detail. To build ChartCap, we design a four-stage pipeline that generates captions using only the discernible data from the chart and employ a cycle consistency-based human verification, which accelerates quality control without sacrificing accuracy. Additionally, we propose a novel metric, the Visual Consistency Score, which evaluates caption quality by measuring the similarity between the chart regenerated from a caption and the original chart, independent of reference captions. Extensive experiments confirms that models fine-tuned on ChartCap consistently generate more accurate and informative captions with reduced hallucinations, surpassing both open-source and proprietary models and even human-annotated captions.",
    "code_link": "https://junyoung-00.github.io/ChartCap/",
    "doi": "https://openaccess.thecvf.com/content/ICCV2025/html/Lim_ChartCap_Mitigating_Hallucination_of_Dense_Chart_Captioning_ICCV_2025_paper.html",
    "categories": [
      "High-level Semantic Cognition"
    ],
    "authors": "Junyoung Lim, Jaewoo Ahn, Gunhee Kim"
  },
  {
    "title": "CHARTEDIT: How Far Are MLLMs From Automating Chart Analysis? Evaluating MLLMs’ Capability via Chart Editing",
    "image": "figure/CHARTEDIT- How Far Are MLLMs From Automating Chart Analysis? Evaluating MLLMs’ Capability via Chart Editing.png",
    "year": "2025",
    "keywords": "Chart Editing, MLLM, Benchmark, Chart Understanding, Chart-to-Code, Evaluation",
    "abstract": "Although multimodal large language models (MLLMs) show promise in generating chart rendering code, editing charts via code presents a greater challenge. This task demands MLLMs to integrate chart understanding and reasoning capacities, which are labor-intensive. While many MLLMs claim such editing capabilities, current evaluations rely on limited case studies, highlighting the urgent need for a comprehensive evaluation framework.In this work, we propose ChartEdit, a new high-quality benchmark designed for chart editing tasks. This benchmark comprises 1,405 diverse editing instructions applied to 233 real-world charts, with each instruction-chart instance having been manually annotated and validated for accuracy. Utilizing ChartEdit, we evaluate the performance of 10 mainstream MLLMs across two types of experiments at both the code and chart levels.The results suggest that large-scale models can generate code to produce images that partially match the reference images.However, their ability to generate accurate edits according to the instructions remains limited. The state-of-the-art (SOTA) model achieves a score of only 59.96, highlighting significant challenges in precise modification. In contrast, small-scale models, including chart-domain models, struggle both with following editing instructions and generating overall chart images, underscoring the need for further development in this area. Code is available at https://github.com/xxlllz/ChartEdit.",
    "code_link": "",
    "doi": "https://aclanthology.org/2025.findings-acl.185/",
    "categories": [
      "Conditional Visualization Synthesis"
    ],
    "authors": "Xuanle Zhao, Xuexin Liu, Haoyue Yang, Xianzhen Luo, Fanhu Zeng, Jianling Li, Qi Shi, Chi Chen"
  },
  {
    "title": "CHARTMASTER: ADVANCING CHART-TO-CODE GENERATION WITH REAL-WORLD CHARTS AND CHART SIMILARITY REINFORCEMENT LEARNING",
    "image": "figure/ CHARTMASTER- ADVANCING CHART-TO-CODE GENERATION WITH REAL-WORLD CHARTS AND CHART SIMILARITY REINFORCEMENT LEARNING.png",
    "year": "2025",
    "keywords": "chart-to-code generation  \nreal-world charts  \nchart similarity reinforcement learning  \nReChartPrompt  \nChartSimRL",
    "abstract": "The chart-to-code generation task requires MLLMs to convert chart images into executable code.This task faces two main challenges:limited data diversity and the difficulty of maintaining visual consistency between generated charts and the original ones.Existing datasets mainly rely on synthetic seed data to prompt GPT models for code generation,resulting in homogeneous samples that limit model generalization to real-world chart styles.To address this,we propose ReChartPrompt,leveraging real-world,human-designed charts extracted from arXiv papers as prompts.By harnessing the rich content and diverse visual styles of arXiv charts,we construct ReChartPrompt-240K,a large-scale and highly diverse dataset that better reflects realistic chart variations.For the second challenge,although SFT improves code understanding by optimizing nexttoken prediction,it does not provide direct supervision on visual features.As a result,it often fails to guarantee that the generated charts visually match the original ones.To address this,we propose ChartSimRL,a GRPO-based reinforcement learning algorithm guided by a novel chart similarity reward.This reward consists of two components:attribute similarity,which measures the overlap of chart attributes like layout and color between the generated and original charts,and visual similarity,which evaluates overall visual features,including texture,using convolutional neural networks.Unlike traditional text-based rewards,our reward accounts for the multimodal nature of the chart-to-code generation task,significantly enhancing the model's ability to accurately reproduce charts.Integrating ReChartPrompt and ChartSimRL,we develop the ChartMaster model,achieving SOTA results among 7B-parameter models and rivaling GPT-4o on various chart-to-code benchmarks.All resources are available at https://github.com/WentaoTan/ChartMaster",
    "code_link": "https://github.com/WentaoTan/ChartMaster",
    "doi": "https://arxiv.org/abs/2508.17608",
    "categories": [
      "Code-level Visualization Reconstruction"
    ],
    "authors": "Wentao Tan, Qiong Cao, Chao Xue, Yibing Zhan, Changxing Ding, Xiaodong He"
  },
  {
    "title": "CHARTMIMIC:EVALUATING LMM'S CROSS-MODAL REASONING CAPABILITY VIA CHART-TO-CODE GENERATION",
    "image": "figure/CHARTMIMIC-EVALUATING LMM'S CROSS-MODAL REASONING CAPABILITY VIA CHART-TO-CODE GENERATION.png",
    "year": "2025",
    "keywords": "ChartMimic\nlarge multimodal models\nchart-to-code generation\nvisual understanding\ncode generation\ncross-modal reasoning",
    "abstract": "We introduce a new benchmark, ChartMimic, aimed at assessing the visually-grounded code generation capabilities of large multimodalmodels （LMMs）. ChartMimic utilizes information-intensive visual charts and textual instructions as inputs, requiring LMMs to generate thecorresponding code for chart rendering.ChartMimic includes 4, 800 human-curated （figure, instruction, code） triplets, which represent theauthentic chart use cases found in scientific papers across various domains （e.g.， Physics, Computer Science, Economics, etc）. These chartsspan 18 regular types and 4 advanced types, diversifying into 201 subcategories.Furthermore, we propose multi-level evaluation metrics toprovide an automatic and thorough assessment of the output code and the rendered charts.Unlike existing code generation benchmarks，ChartMimic places emphasis on evaluating LMMs' capacity to harmonize a blend of cognitive capabilities, encompassing visualunderstanding, code generation, and cross-modal reasoning. The evaluation of 3 proprietary models and 14 open-weight models highlightsthe substantial challenges posed by ChartMimic. Even the advanced GPT-40, InternVL2-Llama3-76B only achieved an average score acrossDirect Mimic and Customized Mimic tasks of 82.2 and 61.6, respectively, indicating significant room for improvement. We anticipate thatChartMimic will inspire the development of LMMs, advancing the pursuit of artificial general intelligence.",
    "code_link": "https://github.com/ChartMimic/ChartMimic",
    "doi": "https://proceedings.iclr.cc/paper_files/paper/2025/hash/42806406dd99e30c3796bc98b2670fa2-Abstract-Conference.html",
    "categories": [
      "Code-level Visualization Reconstruction"
    ],
    "authors": "Cheng Yang, Chufan Shi, Yaxin Liu, Bo Shui, Junjie Wang, Mohan Jing, Linran Xu, Xinyu Zhu, Siheng Li, Yuxiang Zhang, Gongye Liu, Xiaomei Nie, Deng Cai, Yujiu Yang"
  },
  {
    "title": "CHARTMOE:MIXTURE OF DIVERSELY ALIGNED EXPERT CONNECTOR FOR CHART UNDERSTANDING",
    "image": "figure/CHARTMOE-MIXTURE OF DIVERSELY ALIGNED EXPERT CONNECTOR FOR CHART UNDERSTANDING.png",
    "year": "2025",
    "keywords": "Chart Understanding  \nMixture of Experts (MoE)  \nChart Alignment  \nMultimodal Large Language Models (MLLMs)  \nChartQA  \nChartComprehension",
    "abstract": "Automatic chart understanding is crucial for content comprehension and document parsing. Multimodal Large Language Models (MLLMs) have demonstrated remarkable capabilities in chart understanding through domain-specific alignment and fine-tuning. However, current MLLMs still struggle to provide faithful data and reliable analysis only based on charts. To address it, we propose ChartMoE, which employs the Mixture of Expert (MoE) architecture to replace the traditional linear projector to bridge the modality gap. Specifically, we train several linear connectors through distinct alignment tasks, which are utilized as the foundational initialization parameters for different experts. Additionally, we introduce ChartMoE-Align, a dataset with nearly 1 million chart-table-JSON-code quadruples to conduct three alignment tasks (chart-table/JSON/code). Combined with the vanilla connector, we initialize different experts diversely and adopt high-quality knowledge learning to further refine the MoE connector and LLM parameters. Extensive experiments demonstrate the effectiveness of the MoE connector and our initialization strategy, e.g., ChartMoE improves the accuracy of the previous state-of-the-art from 80.48% to 84.64% on the ChartQA benchmark.",
    "code_link": "https://github.com/DataArcTech/ChartMoE",
    "doi": "https://proceedings.iclr.cc/paper_files/paper/2025/hash/c33cd281f8cd784626a57de340e43fe4-Abstract-Conference.html",
    "categories": [
      "Low-level Information Perception",
      "High-level Semantic Cognition",
      "Code-level Visualization Reconstruction",
      "Conditional Visualization Synthesis"
    ],
    "authors": "Zhengzhuo Xu, Bowen Qu, Yiyan Qi, Sinan Du, Chengjin Xu, Chun Yuan, Jian Guo"
  },
  {
    "title": "CHARTQAPRO :A More Diverse and Challenging Benchmark for Chart Question Answering",
    "image": "figure/CHARTQAPRO -A More Diverse and Challenging Benchmark for Chart Question Answering.png",
    "year": "2025",
    "keywords": "Chart Question Answering\nChartQA\nVision-Language Models\nBenchmark Evaluation\nMultimodal Reasoning\nChart Understanding",
    "abstract": "Charts are ubiquitous,as people often use them to analyze data,answer questions,and discover critical insights.However,performing complex analytical tasks with charts requires significant perceptual and cognitive effort.Chart Question Answering (CQA)systems automate this process by enabling models to interpret and reason with visual representations of data.However,existing benchmarks like ChartQA lack real-world diversity and have recently shown performance saturation with modern large vision-language models (LVLMs).To address these limitations,we introduce CHARTQAPRO,a new benchmark that includes 1,341charts from 157diverse sources,spanning various chart types—including infographics and dashboards—and featuring 1,948questions in various types,such as multiplechoice,conversational,hypothetical,and unanswerable questions,to better reflect real-world challenges.Our evaluations with 21models show a substantial performance drop for LVLMs on CHARTQAPRO;e.g.,Claude Sonnet 3.5scores 90.5%on ChartQA but only 55.81%on CHARTQAPRO,underscoring the complexity of chart reasoning.We complement our findings with detailed error analyses and ablation studies,identifying key challenges and opportunities for advancing LVLMs in chart understanding and reasoning.We release CHARTQAPRO at https://github.com/vis-nlp/ChartQAPro.",
    "code_link": "https://github.com/vis-nlp/ChartQAPro",
    "doi": "https://aclanthology.org/2025.findings-acl.978/",
    "authors": "Ahmed Masry, Mohammed Saidul Islam, Mahir Ahmed, Aayush Bajaj, Firoz Kabir, Aaryaman Kartha, Md Tahmid Rahman Laskar, Mizanur Rahman, Shadikur Rahman, Mehrad Shahmohammadi, Megh Thakkar, Md Rizwan Parvez, Enamul Hoque, Shafiq Joty",
    "categories": [
      "High-level Semantic Cognition"
    ]
  },
  {
    "title": "CharXiv: Charting Gaps in Realistic Chart Understanding in Multimodal LLMs",
    "image": "figure/CharXiv- Charting Gaps in Realistic Chart Understanding in Multimodal LLMs.png",
    "year": "2024",
    "keywords": "CharXiv\nchart understanding\nmultimodal large language models\nMLLMs\ndescriptive questions\nreasoning questions\narXiv papers\nvisual reasoning",
    "abstract": "Chart understanding plays a pivotal role when applying Multimodal Large Language Models （MLLMs） to real-world tasks such as analyzingscientific papers or financial reports. However, existing datasets often focus on oversimplified and homogeneous charts with template-basedquestions, leading to an overly optimistic measure of progress. We demonstrate that although open-source models can appear tooutperform strong proprietary models on these benchmarks, a simple stress test with slightly different charts or questions deterioratesperformance by up to 34.5%. In this work, we propose CharXiv, a comprehensive evaluation suite involving 2,323 natural, challenging, anddiverse charts from scientific papers. CharXiv includes two types of questions: 1） descriptive questions about examining basic chartelements and 2 reasoning questions that require synthesizing information across complex visual elements in the chart. To ensure quality, allCharts and questions are handpicked, curatea, and verified by human experts. Our results reveal a substantial, previously underestimatedgap between the reasoning skills of the strongest proprietary model （i.e.， GPT-4o）， which achieves 47.1% accuracy, and the strongest open-source model （i.e.， InternVL Chat V1.5）， which achieves 29.2%.All models lag far behind human performance of 80.5%， underscoringweaknesses in the chart understanding capabilities of existing MLLMs. We hope that CharXiv facilitates future research on MLLM chartunderstanding by providing a more realistic and faithful measure of progress. Project website: https://charxiv.github.io/",
    "code_link": "https://github.com/princeton-nlp/CharXiv",
    "doi": "https://proceedings.neurips.cc/paper_files/paper/2024/hash/cdf6f8e9fd9aeaf79b6024caec24f15b-Abstract-Datasets_and_Benchmarks_Track.html",
    "authors": "Zirui Wang, Mengzhou Xia, Luxi He, Howard Chen, Yitao Liu, Richard Zhu, Kaiqu Liang, Xindi Wu, Haotian Liu, Sadhika Malladi, Alexis Chevalier, Sanjeev Arora, Danqi Chen",
    "categories": [
      "High-level Semantic Cognition"
    ]
  },
  {
    "title": "Chart-R1:Chain-of-Thought Supervision and Reinforcement for Advanced Chart Reasoner",
    "image": "figure/Chart-R1-Chain-of-Thought Supervision and Reinforcement for Advanced Chart Reasoner.png",
    "year": "2025",
    "keywords": "Chart-R1  \nChain-of-Thought Supervision  \nReinforcement Learning  \nChart Reasoning  \nProgrammatic Data Synthesis  \nVision-Language Model",
    "abstract": "Chart reasoning presents unique challenges due to its inherent complexity -- requiring precise numerical comprehension, multi-level visual understanding, and logical inference across interconnected data elements. Existing vision-language models often struggle with such reasoning tasks, particularly when handling multi-subchart scenarios and numerical sensitivity. To address these challenges, we introduce Chart-R1, a chart-domain vision-language model that leverages reinforcement fine-tuning for advanced chart reasoning. We first propose a programmatic data synthesis approach to generate high-quality step-by-step reasoning data with verifiable answer formats, covering diverse chart types and complexity levels. Our two-stage training strategy includes: (1) Chart-COT, which decomposes complex reasoning into interpretable subtasks through chain-of-thought supervision, and (2) Chart-RFT, which employs group relative policy optimization with numerically sensitive rewards tailored for chart-specific reasoning. Experiments on open-source benchmarks and our proposed ChartRQA dataset demonstrate that Chart-R1 significantly outperforms existing chart-domain methods and rivals large-scale open/closed-source models.",
    "code_link": "https://github.com/DocTron-hub/Chart-R1",
    "doi": "https://arxiv.org/abs/2507.15509",
    "authors": "Lei Chen, Xuanle Zhao, Zhixiong Zeng, Jing Huang, Yufeng Zhong, Lin Ma",
    "categories": [
      "High-level Semantic Cognition"
    ]
  },
  {
    "title": "Chart-based Reasoning: Transferring Capabilities from LLMs to VLMs",
    "image": "figure/Chart-based Reasoning- Transferring Capabilities from LLMs to VLMs.png",
    "year": "2024",
    "keywords": "Chart-based Reasoning  \nLLMs to VLMs  \nChartQA  \nPaLI3-5B  \nSynthetic Data  \nMulti-task Loss  \nReasoning Traces  \nProgram-of-Thoughts",
    "abstract": "Vision-language models (VLMs) are achieving increasingly strong performance on multimodal tasks. However, reasoning capabilities remain limited particularly for smaller VLMs, while those of large-language models (LLMs) have seen numerous improvements. We pro-pose a technique to transfer capabilities from LLMs to VLMs. On the recently introduced ChartQA, our method obtains state-of-the-artperformance when applied on the PaLI3-5B VLM by Chen et al. (2023c), while also enabling much better performance on PlotQA and FigureQA.We first improve the chart representation by continuing the pre-training stage using an improved version of the chart-to-table translation task by Liu et al. (2023a). We then propose constructing a 20x larger dataset than the original training set. To improve general reasoning capabilities and improve numerical operations, we synthesize reasoning traces using the table representation of charts. Lastly, our model is fine-tuned using the multitask loss introduced by Hsieh et al. (2023).Our variant ChartPaLI-5B outperforms even 10x larger models such as PaLIX-55B without using an upstream OCR system, while keeping inference time constant compared to the PaLI3-5B baseline. When rationales are further refined with a simple program-of-thought prompt (Chen et al., 2023a), our model outperforms the recently introduced Gemini Ultra and GPT-4V.",
    "code_link": "",
    "doi": "https://aclanthology.org/2024.findings-naacl.62/",
    "authors": "Victor Carbune, Hassan Mansoor, Fangyu Liu, Rahul Aralikatte, Gilles Baechler, Jindong Chen, Abhanshu Sharma",
    "categories": [
      "High-level Semantic Cognition"
    ]
  },
  {
    "title": "Chart-to-Text: A Large-Scale Benchmark for Chart Summarization",
    "image": "figure/Chart-to-Text- A Large-Scale Benchmark for Chart Summarization.png",
    "year": "2022",
    "keywords": "Chart summarization\nNatural language generation\nData-to-text generation\nImage captioning\nNeural models\nAutomatic evaluation\nHuman evaluation",
    "abstract": "Charts are commonly used for exploring data and communicating insights. Generating natural language summaries from charts can be very helpful for people in inferring key insights that would otherwise require a lot of cognitive and perceptual efforts. We present Chart-to-text, a large-scale benchmark with two datasets and a total of 44,096 charts covering a wide range of topics and chart types. We explain the dataset construction process and analyze the datasets. We also introduce a number of state-of-the-art neural models as baselines that utilize image captioning and data-to-text generation techniques to tackle two problem variations: one assumes the underlying data table of the chart is available while the other needs to extract data from chart images. Our analysis with automatic and human evaluation shows that while our best models usually generate fluent summaries and yield reasonable BLEU scores, they also suffer from hallucinations and factual errors as well as difficulties in correctly explaining complex patterns and trends in charts.",
    "code_link": "https://github.com/vis-nlp/Chart-to-text",
    "doi": "https://aclanthology.org/2022.acl-long.277/",
    "authors": "Shankar Kantharaj, Rixie Tiffany Ko Leong, Xiang Lin, Ahmed Masry, Megh Thakkar, Enamul Hoque, Shafiq Joty",
    "categories": [
      "High-level Semantic Cognition"
    ]
  },
  {
    "title": "ChartBench: A Benchmark for Complex Visual Reasoning in Charts",
    "image": "figure/ChartBench- A Benchmark for Complex Visual Reasoning in Charts.png",
    "year": "2024",
    "keywords": "ChartBench\nMultimodal Large Language Models\nVisual Reasoning\nChart Comprehension\nBenchmarking\nAcc+ Metric",
    "abstract": "Multimodal Large Language Models (MLLMs) have shown impressive capabilities in image understanding and generation. However, current benchmarks fail to accurately evaluate the chart comprehension of MLLMs due to limited chart types and inappropriate metrics. To address this, we propose ChartBench, a comprehensive benchmark designed to assess chart comprehension and data reliability through complex visual reasoning. ChartBench includes 42 categories, 66.6k charts, and 600k question-answer pairs. Notably, many charts lack data point annotations, which requires MLLMs to derive values similar to human understanding by leveraging inherent chart elements such as color, legends, and coordinate systems. We also design an enhanced evaluation metric, Acc+, to evaluate MLLMs without extensive manual or costly LLM-based evaluations. Furthermore, we propose two baselines based on the chain of thought and supervised fine-tuning to improve model performance on unannotated charts. Extensive experimental evaluations of 18 open-sourced and 3 proprietary MLLMs reveal their limitations in chart comprehension and offer valuable insights for further research. Code and dataset are publicly available at https://chartbench.github.io/",
    "code_link": "https://chartbench.github.io/\nhttps://github.com/DataArcTech/ChartBench",
    "doi": "https://arxiv.org/abs/2312.15915",
    "authors": "Zhengzhuo Xu, Sinan Du, Yiyan Qi, Chengjin Xu, Chun Yuan, Jian Guo",
    "categories": [
      "High-level Semantic Cognition"
    ]
  },
  {
    "title": "ChartCoder: Advancing Multimodal Large Language Model for Chart-to-Code Generation",
    "image": "figure/ChartCoder- Advancing Multimodal Large Language Model for Chart-to-Code Generation.png",
    "year": "2025",
    "keywords": "Multimodal Large Language Models  \nChart-to-Code Generation  \nCode LLMs  \nChart2Code-160k  \nSnippet-of-Thought",
    "abstract": "Multimodal Large Language Models (MLLMs) have demonstrated remarkable capabilities in chart understanding tasks. However, interpreting charts with textual descriptions often leads to information loss, as it fails to fully capture the dense information embedded in charts. In contrast, parsing charts into code provides lossless representations that can effectively contain all critical details. Although existing open-source MLLMs have achieved success in chart understanding tasks, they still face two major challenges when applied to chart-to-code tasks: (1) Low executability and poor restoration of chart details in the generated code and (2) Lack of large-scale and diverse training data. To address these challenges, we propose ChartCoder, the first dedicated chart-to-code MLLM, which leverages Code LLMs as the language backbone to enhance the executability of the generated code. Furthermore, we introduce Chart2Code-160k, the first large-scale and diverse dataset for chart-to-code generation, and propose the Snippet-of-Thought (SoT) method, which transforms direct chart-to-code generation data into step-by-step generation. Experiments demonstrate that ChartCoder, with only 7B parameters, surpasses existing open-source MLLMs on chart-to-code benchmarks, achieving superior chart restoration and code excitability. Our code is available at https://github.com/thunlp/ChartCoder.",
    "code_link": "https://github.com/thunlp/ChartCoder",
    "doi": "https://aclanthology.org/2025.acl-long.363/",
    "authors": "Xuanle Zhao, Xianzhen Luo, Qi Shi, Chi Chen, Shuo Wang, Zhiyuan Liu, Maosong Sun",
    "categories": [
      "Code-level Visualization Reconstruction"
    ]
  },
  {
    "title": "ChartE3: A Comprehensive Benchmark for End-to-End Chart Editing",
    "image": "figure/ChartE3- A Comprehensive Benchmark for End-to-End Chart Editing.png",
    "year": "2026",
    "keywords": "Chart Editing, End-to-End, Benchmark, Local Editing, Global Editing, MLLM",
    "abstract": "Charts are a fundamental visualization format for structured data analysis. Enabling end-to-end chart editing according to user intent is of great practical value, yet remains challenging due to the need for both fine-grained control and global structural consistency. Most existing approaches adopt pipeline-based designs, where natural language or code serves as an intermediate representation, limiting their ability to faithfully execute complex edits. We introduce ChartE3, an End-to-End Chart Editing benchmark that directly evaluates models without relying on intermediate natural language programs or code-level supervision. ChartE3 focuses on two complementary editing dimensions: local editing, which involves fine-grained appearance changes such as font or color adjustments, and global editing, which requires holistic, data-centric transformations including data filtering and trend line addition. ChartE3 contains over 1,200 high-quality samples constructed via a well-designed data pipeline with human curation. Each sample is provided as a triplet of a chart image, its underlying code, and a multimodal editing instruction, enabling evaluation from both objective and subjective perspectives. Extensive benchmarking of state-of-the-art multimodal large language models reveals substantial performance gaps, particularly on global editing tasks, highlighting critical limitations in current end-to-end chart editing capabilities.",
    "code_link": "",
    "doi": "https://arxiv.org/abs/2601.21694",
    "categories": [
      "Conditional Visualization Synthesis"
    ],
    "authors": "Shuo Li, Jiajun Sun, Zhekai Wang, Xiaoran Fan, Hui Li, Dingwen Yang, Zhiheng Xi, Yijun Wang, Zifei Shan, Tao Gui, Qi Zhang, Xuanjing Huang"
  },
  {
    "title": "ChartEditBench: Evaluating Grounded Multi-Turn Chart Editing in Multimodal Language Models",
    "image": "figure/ChartEditBench- Evaluating Grounded Multi-Turn Chart Editing in Multimodal Language Models.png",
    "year": "2026",
    "keywords": "Chart Editing, Multi-turn, Benchmark, MLLM, Context-aware, Evaluation",
    "abstract": "While Multimodal Large Language Models (MLLMs) perform strongly on single-turn chart generation, their ability to support real-world exploratory data analysis remains underexplored. In practice, users iteratively refine visualizations through multi-turn interactions that require maintaining common ground, tracking prior edits, and adapting to evolving preferences. We introduce ChartEditBench, a benchmark for incremental, visually grounded chart editing via code, comprising 5,000 difficulty-controlled modification chains and a rigorously human-verified subset. Unlike prior one-shot benchmarks, ChartEditBench evaluates sustained, context-aware editing. We further propose a robust evaluation framework that mitigates limitations of LLM-as-a-Judge metrics by integrating execution-based fidelity checks, pixel-level visual similarity, and logical code verification. Experiments with state-of-the-art MLLMs reveal substantial degradation in multi-turn settings due to error accumulation and breakdowns in shared context, with strong performance on stylistic edits but frequent execution failures on data-centric transformations. ChartEditBench, establishes a challenging testbed for grounded, intent-aware multimodal programming.",
    "code_link": "",
    "doi": "https://arxiv.org/abs/2602.15758",
    "categories": [
      "Conditional Visualization Synthesis"
    ],
    "authors": "Manav Nitin Kapadnis, Lawanya Baghel, Atharva Naik, Carolyn Rosé"
  },
  {
    "title": "ChartGPT: Leveraging LLMs to Generate Charts From Abstract Natural Language",
    "image": "figure/ChartGPT- Leveraging LLMs to Generate Charts From Abstract Natural Language.png",
    "year": "2024",
    "keywords": "natural language interfaces\nchart generation\nlarge language models\ndata visualization\nfine-tuning",
    "abstract": "Theuseofnaturallanguageinterfaces(NLIs)tocreate charts is becoming increasingly popular due to the intuitiveness of natural language interactions.One key challenge in this approach is to accurately capture user intents and transform them to proper chart specifications.This obstructs the wide use of NLI in chart generation,as users'natural language inputs are generally abstract (i.e.,ambiguous or under-specified),without a clear specification of visual encodings.Recently,pre-trained large language models (LLMs)have exhibited superior performance in understanding and generating natural language,demonstrating great potential for downstream tasks.Inspired by this major trend,we propose ChartGPT,generating charts from abstract natural language inputs.However,LLMs are struggling to address complex logic problems.To enable the model to accurately specify the complex parameters and perform operations in chart generation,we decompose the generation process into a step-by-step reasoning pipeline,so that the model only needs to reason a single and specific sub-task during each run.Moreover,LLMs are pre-trained on general datasets,which might be biased for the task of chart generation.To provide adequate visualization knowledge,we create a dataset consisting of abstract utterances and charts and improve model performance through fine-tuning.We further design an interactive interface for ChartGPT that allows users to check and modify the intermediate outputs of each step.The effectiveness of the proposed system is evaluated through quantitative evaluations and a user study.",
    "code_link": "https://huggingface.co/yuan-tian/chartgpt",
    "doi": "https://ieeexplore.ieee.org/abstract/document/10443572",
    "authors": "Yuan Tian, Weiwei Cui, Dazhen Deng, Xinjing Yi, Yurun Yang, Haidong Zhang, Yingcai Wu",
    "categories": [
      "Conditional Visualization Synthesis"
    ]
  },
  {
    "title": "ChartGalaxy: A Dataset for Infographic Chart Understanding and Generation",
    "image": "figure/ChartGalaxy- A Dataset for Infographic Chart Understanding and Generation.png",
    "year": "2025",
    "keywords": "ChartGalaxy  \ninfographic charts  \nmultimodal reasoning  \ndata understanding  \nchart generation  \nlayout templates",
    "abstract": "Infographic charts are a powerful medium for communicating abstract data by combining visual elements (e.g.,charts,images)with textual information.However,their visual and structural richness poses challenges for large vision-language models (LVLMs),which are typically trained on plain charts.To bridge this gap,we introduce ChartGalaxy,a million-scale dataset designed to advance the understanding and generation of infographic charts.The dataset is constructed through an inductive process that identifies 75chart types,330chart variations,and 68layout templates from real infographic charts and uses them to create synthetic ones programmatically.We showcase the utility of this dataset through:1)improving infographic chart understanding via fine-tuning,2)benchmarking code generation for infographic charts,and 3)enabling example-based infographic chart generation.By capturing the visual and structural complexity of real design,ChartGalaxy provides a useful resource for enhancing multimodal reasoning and generation in LVLMs.",
    "code_link": "https://github.com/ChartGalaxy/ChartGalaxy\nhttps://huggingface.co/datasets/ChartGalaxy/ChartGalaxy",
    "doi": "https://arxiv.org/abs/2505.18668",
    "authors": "Zhen Li, Duan Li, Yukai Guo, Xinyuan Guo, Bowen Li, Lanxi Xiao, Shenyu Qiao, Jiashu Chen, Zijian Wu, Hui Zhang, Xinhuan Shu, Shixia Liu",
    "categories": [
      "Low-level Information Perception",
      "High-level Semantic Cognition",
      "Code-level Visualization Reconstruction",
      "Conditional Visualization Synthesis"
    ]
  },
  {
    "title": "ChartGemma:Visual Instruction-tuning for Chart Reasoning in the Wild",
    "image": "figure/ChartGemma-Visual Instruction-tuning for Chart Reasoning in the Wild.png",
    "year": "2025",
    "keywords": "ChartGemma\nVisual Instruction-tuning\nChart Reasoning\nMultimodal Model\nChart Understanding\nInstruction-tuning Data\nVision-Language Models\nChart Summarization\nQuestion Answering\nFact-checking",
    "abstract": "Given the ubiquity of charts as a data analysis,visualization,and decision-making tool across industries and sciences,there has been a growing interest in developing pre-trained foundation models as well as general purpose instruction-tuned models for chart understanding and reasoning.However,existing methods suffer crucial drawbacks across two critical axes affecting the performance of chart representation models:they are trained on data generated from underlying data tables of the charts,ignoring the visual trends and patterns in chart images,and use weakly aligned vision-language backbone models for domainspecific training,limiting their generalizability when encountering charts in the wild.We address these important drawbacks and introduce ChartGemma,a novel chart understanding and reasoning model developed over PaliGemma.Rather than relying on underlying data tables,ChartGemma is trained on instructiontuning data generated directly from chart images,thus capturing both high-level trends and low-level visual information from a diverse set of charts.Our simple approach achieves stateof-the-art results across 5benchmarks spanning chart summarization,question answering,and fact-checking,and our elaborate qualitative studies on real-world charts show that ChartGemma generates more realistic and factually correct summaries compared to its contemporaries. We release the code,model checkpoints,dataset,and demos at https://github.com/vis-nlp/ChartGemma.",
    "code_link": "https://github.com/visnlp/ChartGemma",
    "doi": "https://aclanthology.org/2025.coling-industry.54/",
    "authors": "Ahmed Masry, Megh Thakkar, Aayush Bajaj, Aaryaman Kartha, Enamul Hoque, Shafiq Joty",
    "categories": [
      "Low-level Information Perception",
      "High-level Semantic Cognition"
    ]
  },
  {
    "title": "ChartInsights: Evaluating Multimodal Large Language Models for Low-Level Chart Question Answering",
    "image": "figure/ChartInsights- Evaluating Multimodal Large Language Models for Low-Level Chart Question Answering.png",
    "year": "2024",
    "keywords": "ChartInsights\nmultimodal large language models\nlow-level chart question answering\ndataset\ntextual prompt strategy\nvisual prompt strategy",
    "abstract": "Chart question answering (ChartQA) tasks play a critical role in interpreting and extracting insights from visualization charts. While recent advancements in multimodal large language models (MLLMs) like GPT-4o have shown promise in high-level ChartQA tasks, such as chart captioning, their effectiveness in low-level ChartQA tasks (e.g., identifying correlations) remains underexplored. In this paper, we address this gap by evaluating MLLMs on low-level ChartQA using a newly curated dataset, ChartInsights, which consists of 22,347 (chart, task, query, answer) covering 10 data analysis tasks across 7 chart types. We systematically evaluate 19 advanced MLLMs, including 12 open-source and 7 closed-source models. The average accuracy rate across these models is 39.8%, with GPT-4o achieving the highest accuracy at 69.17%. To further explore the limitations of MLLMs in low-level ChartQA, we conduct experiments that alter visual elements of charts (e.g., changing color schemes, adding image noise) to assess their impact on the task effectiveness. Furthermore, we propose a new textual prompt strategy, Chain-of-Charts, tailored for low-level ChartQA tasks, which boosts performance by 14.41%, achieving an accuracy of 83.58%. Finally, incorporating a visual prompt strategy that directs attention to relevant visual elements further improves accuracy to 84.32%.",
    "code_link": "https://github.com/HKUSTDial/ChartInsights",
    "doi": "https://aclanthology.org/2024.findings-emnlp.710/",
    "authors": "Yifan Wu, Lutao Yan, Leixian Shen, Yunhai Wang, Nan Tang, Yuyu Luo",
    "categories": [
      "High-level Semantic Cognition"
    ]
  },
  {
    "title": "ChartInstruct:Instruction Tuning for Chart Comprehension and Reasoning",
    "image": "figure/ChartInstruct-Instruction Tuning for Chart Comprehension and Reasoning.png",
    "year": "2024",
    "keywords": "Chart comprehension\nInstruction tuning\nVision-language models\nChart-specific tasks\nReal-world applicability",
    "abstract": "Charts provide visual representations of data and are widely used for analyzing information, addressing queries, and conveying insights to others. Various chart-related downstream tasks have emerged recently, such as question answering and summarization. A common strategy to solve these tasks is to fine-tune various models originally trained on vision tasks language. However, such task-specific models are not capable of solving a wide range of chart-related tasks, constraining their real-world applicability. To overcome these challenges, we introduce ChartInstruct: a novel chart-specific vision-language Instruction-following dataset comprising 191K instructions generated with 71K charts. We then present two distinct systems for instruction tuning on such datasets: (1) an end-to-end model that connects a vision encoder for chart understanding with a LLM; and (2) a pipeline model that employs a two-step approach to extract chart data tables and input them into the LLM. In experiments on four downstream tasks, we first show the effectiveness of our model–achieving a new set of state-of-the-art results. Further evaluation shows that our instruction-tuning approach supports a wide array of real-world chart comprehension and reasoning scenarios, thereby expanding the scope and applicability of our models to new kinds of tasks.",
    "code_link": "https://github.com/visnlp/ChartInstruct",
    "doi": "https://aclanthology.org/2024.findings-acl.619/",
    "authors": "Ahmed Masry, Mehrad Shahmohammadi, Md Rizwan Parvez, Enamul Hoque, Shafiq Joty",
    "categories": [
      "High-level Semantic Cognition"
    ]
  },
  {
    "title": "ChartLlama: A Multimodal LLM for Chart Understanding and Generation",
    "image": "figure/ChartLlama- A Multimodal LLM for Chart Understanding and Generation.png",
    "year": "2023",
    "keywords": "ChartLlama\nMultimodal LLM\nChart Understanding\nChart Generation\nInstruction Tuning Dataset\nGPT-4",
    "abstract": "Multi-modal large language models have demonstrated impressive performances on most vision-language tasks.However,the model generally lacks the understanding capabilities for specific domain data,particularly when it comes to interpreting chart figures.This is mainly due to the lack of relevant multi-modal instruction tuning datasets.In this article,we create a high-quality instruction-tuning dataset leveraging GPT-4.We develop a multi-step data generation process in which different steps are responsible for generating tabular data,creating chart figures,and designing instruction tuning data separately.Our method's flexibility enables us to generate diverse,high-quality instruction-tuning data consistently and efficiently while maintaining a low resource expenditure.Additionally,it allows us to incorporate a wider variety of chart and task types not yet featured in existing datasets.Next,we introduce ChartLlama,a multi-modal large language model that we've trained using our created dataset.ChartLlama outperforms all prior methods in ChartQA,Chart-to-text,and Chart-extraction evaluation benchmarks.Additionally,ChartLlama significantly improves upon the baseline in our specially compiled chart dataset,which includes new chart and task types.The results of ChartLlama confirm the value and huge potential of our proposed data generation method in enhancing chart comprehension.",
    "code_link": "https://github.com/tingxueronghua/ChartLlama-code",
    "doi": "https://arxiv.org/abs/2311.16483",
    "authors": "Yucheng Han, Chi Zhang, Xin Chen, Xu Yang, Zhibin Wang, Gang Yu, Bin Fu, Hanwang Zhang",
    "categories": [
      "Low-level Information Perception",
      "High-level Semantic Cognition",
      "Code-level Visualization Reconstruction",
      "Conditional Visualization Synthesis"
    ]
  },
  {
    "title": "ChartM3: Benchmarking Chart Editing with Multimodal Instructions",
    "image": "figure/ChartM3- Benchmarking Chart Editing with Multimodal Instructions.png",
    "year": "2025",
    "keywords": "Chart Editing, Multimodal, Benchmark, Visual Indicators, Natural Language, Fine-grained Editing",
    "abstract": "Charts are a fundamental visualization format widely used in data analysis across research and industry. While enabling users to edit charts based on high-level intentions is of great practical value, existing methods primarily rely on natural language instructions, which are often too ambiguous to support fine-grained editing. In this work, we introduce a novel paradigm for multimodal chart editing, where user intent is expressed through a combination of natural language and visual indicators that explicitly highlight the elements to be modified. To support this paradigm, we present ChartM3, a new benchmark for Multimodal chart editing with Multi-level complexity and Multi-perspective evaluation. ChartM3 contains 1,000 samples spanning four levels of editing difficulty. Each sample includes triplets in the form of (chart, code, multimodal instructions). To comprehensively evaluate chart editing models, ChartM3 provides metrics that assess both visual appearance and code correctness. Our benchmark reveals significant limitations in current multimodal large language models (MLLMs), including GPT-4o, particularly in their ability to interpret and act on visual indicators. To address this, we construct ChartM3-Train, a large-scale training set with 24,000 multimodal chart editing samples. Fine-tuning MLLMs on this dataset leads to substantial improvements, demonstrating the importance of multimodal supervision in building practical chart editing systems. Our datasets, codes, and evaluation tools are available at https://github.com/MLrollIT/ChartM3.",
    "code_link": "",
    "doi": "https://dl.acm.org/doi/abs/10.1145/3746027.3755714",
    "categories": [
      "Conditional Visualization Synthesis"
    ],
    "authors": "Donglu Yang, Liang Zhang, Zihao Yue, Liangyu Chen, Yichen Xu, Wenxuan Wang, Qin Jin"
  },
  {
    "title": "ChartMind: A Comprehensive Benchmark for Complex Real-world Multimodal Chart Question Answering",
    "image": "figure/ChartMind- A Comprehensive Benchmark for Complex Real-world Multimodal Chart Question Answering.png",
    "year": "2025",
    "keywords": "ChartMind  \nmultimodal chart question answering  \ncontext-aware framework  \nmultilingual evaluation  \nopen-domain outputs  \ncomplex reasoning tasks",
    "abstract": "Chart question answering (CQA) has become a critical multimodal task for evaluating the reasoning capabilities of vision-language models.While early approaches have shown promising performance by focusing on visual features or leveraging large-scale pre-training,most existing evaluations rely on rigid output formats and objective metrics,thus ignoring the complex,real-world demands of practical chart analysis.In this paper,we introduce ChartMind,a new benchmark designed for complex CQA tasks in real-world settings.ChartMind covers seven task categories,incorporates multilingual contexts,supports open-domain textual outputs,and accommodates diverse chart formats,bridging the gap between real-world applications and traditional academic benchmarks.Furthermore,we propose a context-aware yet modelagnostic framework,ChartLLM,that focuses on extracting key contextual elements,reducing noise,and enhancing the reasoning accuracy of multimodal large language models.Extensive evaluations on ChartMind and three representative public benchmarks with 14mainstream multimodal models show our framework significantly outperforms the previous three common CQA paradigms:instruction-following,OCRenhanced,and chain-of-thought,highlighting the importance of flexible chart understanding for real-world CQA.These findings suggest new directions for developing more robust chart reasoning in future research.",
    "code_link": "",
    "doi": "https://aclanthology.org/2025.emnlp-main.226/",
    "authors": "Jingxuan Wei, Nan Xu, Junnan Zhu, Haoyanni, Gaowei Wu, Qi Chen, Bihui Yu, Lei Wang",
    "categories": [
      "High-level Semantic Cognition"
    ]
  },
  {
    "title": "ChartMuseum: Testing Visual Reasoning Capabilities of Large Vision-Language Models",
    "image": "figure/ChartMuseum- Testing Visual Reasoning Capabilities of Large Vision-Language Models.png",
    "year": "2025",
    "keywords": "ChartMuseum\nVisual Reasoning\nLarge Vision-Language Models\nChart Understanding\nBenchmarking\nMultimodal Reasoning\nSynthetic Dataset\nHuman Performance\nModel Evaluation",
    "abstract": "Chart understanding presents a unique challenge for large vision-language models (LVLMs), as it requires the integration of sophisticated textual and visual reasoning capabilities. However, current LVLMs exhibit a notable imbalance between these skills, falling short on visual reasoning that is difficult to perform in text. We conduct a case study using a synthetic dataset solvable only through visual reasoning and show that model performance degrades significantly with increasing visual complexity, while human performance remains robust. We then introduce CHARTMUSEUM, a new Chart Question Answering (QA) benchmark containing 1,162 expert-annotated questions spanning multiple reasoning types, curated from real-world charts across 184 sources, specifically built to evaluate complex visual and textual reasoning. Unlike prior chart understanding benchmarks—where frontier models perform similarly and near saturation—our benchmark exposes a substantial gap between model and human performance, while effectively differentiating model capabilities: although humans achieve 93% accuracy, the best-performing model Gemini-2.5-Pro attains only 63.0%, and the leading open-source LVLM Qwen2.5-VL-72B-Instruct achieves only 38.5%. Moreover, on questions requiring primarily visual reasoning, all models experience a 35%-55% performance drop from text-reasoning-heavy question performance. Lastly, our qualitative error analysis reveals specific categories of visual reasoning that are challenging for current LVLMs. Both ChartMuseum and the evaluation code are available at https://github.com/Liyan06/ChartMuseum.",
    "code_link": "https://github.com/Liyan06/ChartMuseum",
    "doi": "https://proceedings.neurips.cc/paper_files/paper/2025/hash/ca20efa9cf3703186d91424cf4876f8b-Abstract-Datasets_and_Benchmarks_Track.html",
    "authors": "Liyan Tang, Grace Kim, Xinyu Zhao, Thom Lake, Wenxuan Ding, Fangcong Yin, Prasann Singhal, Manya Wadhwa, Zeyu Leo Liu, Zayne Rea Sprague, Ramya Namuduri, Bodun Hu, Juan Diego Rodriguez, Puyuan Peng, Greg Durrett",
    "categories": [
      "High-level Semantic Cognition"
    ]
  },
  {
    "title": "ChartOCR: Data Extraction from Charts Images via a Deep Hybrid Framework",
    "image": "figure/ChartOCR- Data Extraction from Charts Images via a Deep Hybrid Framework.png",
    "year": "2021",
    "keywords": "ChartOCR  \nData Extraction  \nCharts Images  \nDeep Hybrid Framework  \nData Visualization  \nKey Point Detection",
    "abstract": "Chart images are commonly used for data visualization.Automatically reading the chart values is a key step for chart content understanding.Charts have a lot of variations in style (e.g.bar chart,line chart,pie chart and etc.),which makes pure rule-based data extraction methods difficult to handle.However,it is also improper to directly apply endto-end deep learning solutions since these methods usually deal with specific types of charts.In this paper,we propose an unified method ChartOCR to extract data from various types of charts.We show that by combing deep framework and rule-based methods,we can achieve a satisfying generalization ability and obtain accurate and semantic-rich intermediate results.Our method extracts the key points that define the chart components.By adjusting the prior rules,the framework can be applied to different chart types.Experiments show that our method achieves state-of-theart performance with fast processing speed on two public datasets.Besides,we also introduce and evaluate on a large dataset ExcelChart400K for training deep models on chart images.The code and the dataset are publicly available at https://github.com/soap117/DeepRule.",
    "code_link": "https://github.com/soap117/DeepRule",
    "doi": "https://openaccess.thecvf.com/content/WACV2021/html/Luo_ChartOCR_Data_Extraction_From_Charts_Images_via_a_Deep_Hybrid_WACV_2021_paper.html",
    "authors": "Junyu Luo, Zekun Li, Jinpeng Wang, Chin-Yew Lin",
    "categories": [
      "Low-level Information Perception"
    ]
  },
  {
    "title": "ChartQA: A Benchmark for Question Answering about Charts with Visual and Logical Reasoning",
    "image": "figure/ChartQA- A Benchmark for Question Answering about Charts with Visual and Logical Reasoning.png",
    "year": "2022",
    "keywords": "ChartQA  \nQuestion Answering  \nCharts  \nVisual Reasoning  \nLogical Reasoning  \nTransformer Models  \nBenchmark  \nData Extraction",
    "abstract": "Charts are very popular for analyzing data.When exploring charts,people often ask a variety of complex reasoning questions that involve several logical and arithmetic operations.They also commonly refer to visual features of a chart in their questions.However,most existing datasets do not focus on such complex reasoning questions as their questions are template-based and answers come from a fixedvocabulary.In this work,we present a largescale benchmark covering 9.6K human-written questions as well as 23.1K questions generated from human-written chart summaries.To address the unique challenges in our benchmark involving visual and logical reasoning over charts,we present two transformer-based models that combine visual features and the data table of the chart in a unified way to answer questions.While our models achieve the state-of-the-art results on the previous datasets as well as on our benchmark,the evaluation also reveals several challenges in answering complex reasoning questions.",
    "code_link": "https://github.com/vis-nlp/ChartQA",
    "doi": "https://aclanthology.org/2022.findings-acl.177/",
    "categories": [
      "High-level Semantic Cognition"
    ],
    "authors": "Ahmed Masry, Do Xuan Long, Jia Qing Tan, Shafiq Joty, Enamul Hoque"
  },
  {
    "title": "ChartSketcher: Reasoning with Multimodal Feedback and Reflection for Chart Understanding",
    "image": "figure/ChartSketcher- Reasoning with Multimodal Feedback and Reflection for Chart Understanding.png",
    "year": "2025",
    "keywords": "Chart Editing, Multimodal Interaction, Natural Language, Sketching, Voice, LLM",
    "abstract": "Charts are high-density visualization carriers for complex data, serving as a crucial medium for information extraction and analysis.Automated chart understanding poses significant challenges to existing multimodal large language models （MLLMs） due to the need forprecise and complex visual reasoning. Current step-by-step reasoning models primarily focus on text-based logical reasoning for chartunderstanding. However, they struggle to refine or correct their reasoning when errors stem from flawed visual understanding, as they lackthe ability to leverage multimodal interaction for deeper comprehension. Inspired by human cognitive behavior, we propose ChartSketcher, amultimodal feedback-driven step-by-step reasoning method designed to address these limitations. ChartSketcher is a chart understandingmodel that employs Sketch-CoT, enabling MLLMs to annotate intermediate reasoning steps directly onto charts using a programmaticsketching library, iteratively feeding these visual annotations back into the reasoning process. This mechanism enables the model to visuallyground its reasoning and refine its understanding over multiple steps. We employ a two-stage training strategy: a cold start phase to learnsketch-based reasoning patterns, followed by off-policy reinforcement learning to enhance reflection and generalization. Experimentsdemonstrate that ChartSketcher achieves promising performance on chart understanding benchmarks and general vision tasks, providing aninteractive and interpretable approach to chart comprehension.",
    "code_link": "https://github.com/MuyeHuang/ChartSketcher?tab=readme-ov-file",
    "doi": "https://proceedings.neurips.cc/paper_files/paper/2025/hash/661de50100d3115cf4317bb8b5219e56-Abstract-Conference.html",
    "categories": [
      "High-level Semantic Cognition"
    ],
    "authors": "Muye Huang, Lingling Zhang, Jie Ma, Han Lai, Fangzhi Xu, Yifei Li, Wenjun Wu, Yaqiang Wu, Jun Liu"
  },
  {
    "title": "ChartX and ChartVLM: A Versatile Benchmark and Foundation Model for Complicated Chart Reasoning",
    "image": "figure/ChartX and ChartVLM- A Versatile Benchmark and Foundation Model for Complicated Chart Reasoning.png",
    "year": "2025",
    "keywords": "Chart understanding  \nmulti-modal large language model (MLLM)  \nchart",
    "abstract": "Recently, many versatile Multi-modal Large Language Models (MLLMs)have emerged continuously.However,their capacity to query information depicted in visual charts and engage in reasoning based on the queried contents remains under-explored.In this paper,to comprehensively and rigorously benchmark the ability of the off-the-shelf MLLMs in the chart domain,we construct ChartX,a multi-modal evaluation set covering 18chart types,7chart tasks,22disciplinary topics,and high-quality chart data.Besides,we develop ChartVLM to offer a new perspective on handling multi-modal tasks that strongly depend on interpretable patterns,such as reasoning tasks in the field of charts or geometric images.We evaluate the chart-related ability of mainstream MLLMs and our ChartVLM on the proposed ChartX evaluation set.Extensive experiments demonstrate that ChartVLM surpasses both versatile and chartrelated large models,including GPT-4V.We believe that our study can pave the way for further exploration in creating a more comprehensive chart evaluation set and developing more interpretable multi-modal models.Both ChartX and ChartVLM are available at: https://github.com/Alpha-Innovator/ChartVLM",
    "code_link": "https://github.com/Alpha-Innovator/ChartVLM",
    "doi": "https://ieeexplore.ieee.org/abstract/document/11202357",
    "authors": "Renqiu Xia, Hancheng Ye, Xiangchao Yan, Qi Liu, Hongbin Zhou, Zijun Chen, Botian Shi, Junchi Yan, Bo Zhang",
    "categories": [
      "Low-level Information Perception",
      "High-level Semantic Cognition",
      "Code-level Visualization Reconstruction"
    ]
  },
  {
    "title": "ChartifyText: Automated Chart Generation from Data-Involved Texts via LLM",
    "image": "figure/ChartifyText- Automated Chart Generation from Data-Involved Texts via LLM.png",
    "year": "2024",
    "keywords": "Chart Generation\nLarge Language Model\nGPT\nData Inference",
    "abstract": "Text documents with numerical values involved are widely used in various applications such as scientific research, economy, public health and journalism. However, it is difficult for readers to quickly interpret such data-involved texts and gain deep insights. To fill this research gap, this work aims to automatically generate charts to accurately convey the underlying data and ideas to readers, which is essentially a challenging task. The challenges originate from text ambiguities, intrinsic sparsity and uncertainty of data in text documents, and subjective sentiment differences. Specifically, we propose ChartifyText, a novel fully-automated approach that leverages Large Language Models (LLMs) to convert complex data-involved texts to expressive charts. It consists of two major modules: tabular data inference and expressive chart generation. The tabular data inference module employs systematic prompt engineering to guide the LLM (e.g., GPT-4) to infer table data, where data ranges, uncertainties, missing data values and corresponding subjective sentiments are explicitly considered. The expressive chart generation module augments standard charts with intuitive visual encodings and concise texts to accurately convey the underlying data and insights. We extensively evaluate the effectiveness of ChartifyText on real-world data-involved text documents through case studies, in-depth interviews with three visualization experts, and a carefully-designed user study with 15 participants. The results demonstrate the usefulness and effectiveness of ChartifyText in helping readers efficiently and effectively make sense of data-involved texts.",
    "code_link": "",
    "doi": "https://arxiv.org/abs/2410.14331",
    "authors": "Songheng Zhang, Lei Wang, Toby Jia-Jun Li, Qiaomu Shen, Yixin Cao, Yong Wang",
    "categories": [
      "Conditional Visualization Synthesis"
    ]
  },
  {
    "title": "Charting the Future: Using Chart Question-Answering for Scalable Evaluation of LLM-Driven Data Visualizations",
    "image": "figure/Charting the Future- Using Chart Question-Answering for Scalable Evaluation of LLM-Driven Data Visualizations.png",
    "year": "2025",
    "keywords": "Large Language Models\nData Visualizations\nVisual Question Answering\nEvaluation Framework\nChart Quality Assessment",
    "abstract": "We propose a novel framework that leverages Visual Question Answering (VQA)models to automate the evaluation of LLM-generated data visualizations.Traditional evaluation methods often rely on human judgment,which is costly and unscalable,or focus solely on data accuracy,neglecting the effectiveness of visual communication.By employing VQA models,we assess data representation quality and the general communicative clarity of charts.Experiments were conducted using two leading VQA benchmark datasets,ChartQA and PlotQA,with visualizations generated by OpenAI's GPT-3.5Turbo and Meta's Llama 3.170B-Instruct models.Our results indicate that LLM-generated charts do not match the accuracy of the original non-LLM-generated charts based on VQA performance measures.Moreover,while our results demonstrate that fewshot prompting significantly boosts the accuracy of chart generation,considerable progress remains to be made before LLMs can fully match the precision of human-generated graphs.This underscores the importance of our work,which expedites the research process by enabling rapid iteration without the need for human annotation,thus accelerating advancements in this field.",
    "code_link": "",
    "doi": "https://aclanthology.org/2025.coling-main.501/",
    "authors": "James Ford, Xingmeng Zhao, Dan Schumacher, Anthony Rios",
    "categories": [
      "Conditional Visualization Synthesis"
    ]
  },
  {
    "title": "Chartreformer: Natural language-driven chart image editing",
    "image": "figure/Chartreformer- Natural language-driven chart image editing.png",
    "year": "2024",
    "keywords": "Chart Editing, Natural Language, Multimodal, Image Generation, Chart Understanding",
    "abstract": "Chart visualizations are essential for data interpretation and communication; however, most charts are only accessible in image format and lack the corresponding data tables and supplementary information, making it difficult to alter their appearance for different application scenarios. To eliminate the need for original underlying data and information to perform chart editing, we propose ChartReformer, a natural language-driven chart image editing solution that directly edits the charts from the input images with the given instruction prompts. The key in this method is that we allow the model to comprehend the chart and reason over the prompt to generate the corresponding underlying data table and visual attributes for new charts, enabling precise edits. Additionally, to generalize ChartReformer, we define and standardize various types of chart editing, covering style, layout, format, and data-centric edits. The experiments show promising results for the natural language-driven chart image editing. Our datasets and model are available at: https://github.com/pengyu965/ChartReformer.",
    "code_link": "",
    "doi": "https://link.springer.com/chapter/10.1007/978-3-031-70533-5_26",
    "categories": [
      "Conditional Visualization Synthesis"
    ],
    "authors": "Pengyu Yan, Mahesh Bhosale, Jay Lal, Bikhyat Adhikari, David Doermann"
  },
  {
    "title": "Charts Are Not Images: On the Challenges of Scientific Chart Editing",
    "image": "figure/Charts Are Not Images- On the Challenges of Scientific Chart Editing.png",
    "year": "2025",
    "keywords": "Chart Understanding, Scientific Visualization, Visual Encoding, Data Semantics, Multimodal",
    "abstract": "Generative models, such as diffusion and autoregressive approaches, have demonstrated impressive capabilities in editing natural images. However, applying these tools to scientific charts rests on a flawed assumption: a chart is not merely an arrangement of pixels but a visual representation of structured data governed by a graphical grammar. Consequently, chart editing is not a pixel-manipulation task but a structured transformation problem. To address this fundamental mismatch, we introduce \textit{FigEdit}, a large-scale benchmark for scientific figure editing comprising over 30,000 samples. Grounded in real-world data, our benchmark is distinguished by its diversity, covering 10 distinct chart types and a rich vocabulary of complex editing instructions. The benchmark is organized into five distinct and progressively challenging tasks: single edits, multi edits, conversational edits, visual-guidance-based edits, and style transfer. Our evaluation of a range of state-of-the-art models on this benchmark reveals their poor performance on scientific figures, as they consistently fail to handle the underlying structured transformations required for valid edits. Furthermore, our analysis indicates that traditional evaluation metrics (e.g., SSIM, PSNR) have limitations in capturing the semantic correctness of chart edits. Our benchmark demonstrates the profound limitations of pixel-level manipulation and provides a robust foundation for developing and evaluating future structure-aware models. By releasing \textit{FigEdit} (this https URL), we aim to enable systematic progress in structure-aware figure editing, provide a common ground for fair comparison, and encourage future research on models that understand both the visual and semantic layers of scientific charts.",
    "code_link": "",
    "doi": "https://arxiv.org/abs/2512.00752",
    "categories": [
      "Conditional Visualization Synthesis"
    ],
    "authors": "Shawn Li, Ryan Rossi, Sungchul Kim, Sunav Choudhary, Franck Dernoncourt, Puneet Mathur, Zhengzhong Tu, Yue Zhao"
  },
  {
    "title": "Chat2vis: Generating data visualizations via natural language using chatgpt, codex and gpt-3 large language models",
    "image": "figure/Chat2vis- Generating data visualizations via natural language using chatgpt, codex and gpt-3 large language models.png",
    "year": "2023",
    "keywords": "Natural Language Interface, Visualization Generation, LLM, ChatGPT, NL2Vis, Code Generation",
    "abstract": "The field of data visualisation has long aimed to devise solutions for generating visualisations directly from natural language text. Research in Natural Language Interfaces (NLIs) has contributed towards the development of such techniques. However, the implementation of workable NLIs has always been challenging due to the inherent ambiguity of natural language, as well as in consequence of unclear and poorly written user queries which pose problems for existing language models in discerning user intent. Instead of pursuing the usual path of developing new iterations of language models, this study uniquely proposes leveraging the advancements in pre-trained large language models (LLMs) such as ChatGPT and GPT-3 to convert free-form natural language directly into code for appropriate visualisations. This paper presents a novel system, Chat2VIS, which takes advantage of the capabilities of LLMs and demonstrates how, with effective prompt engineering, the complex problem of language understanding can be solved more efficiently, resulting in simpler and more accurate end-to-end solutions than prior approaches. Chat2VIS shows that LLMs together with the proposed prompts offer a reliable approach to rendering visualisations from natural language queries, even when queries are highly misspecified and underspecified. This solution also presents a significant reduction in costs for the development of NLI systems, while attaining greater visualisation inference abilities compared to traditional NLP approaches that use hand-crafted grammar rules and tailored models. This study also presents how LLM prompts can be constructed in a way that preserves data security and privacy while being generalisable to different datasets. This work compares the performance of GPT-3, Codex and ChatGPT across several case studies and contrasts the performances with prior studies.",
    "code_link": "",
    "doi": "https://ieeexplore.ieee.org/abstract/document/10121440",
    "categories": [
      "Conditional Visualization Synthesis"
    ],
    "authors": "Paula Maddigan, Teo Susnjak"
  },
  {
    "title": "Context-Aware Chart Element Detection",
    "image": "figure/Context-Aware Chart Element Detection.PNG",
    "year": "2023",
    "keywords": "Chart Detection  \nChart Data Extraction  \nChart Understanding  \nDocument Analysis",
    "abstract": "As a prerequisite of chart data extraction, the accurate detection of chart basic elements is essential and mandatory. In contrast to object detection in the general image domain, chart element detection relies heavily on context information as charts are highly structured data visualization formats. To address this, we propose a novel method CACHED, which stands for Context-Aware Chart Element Detection, by integrating a local-global context fusion module consisting of visual context enhancement and positional context encoding with the Cascade R-CNN framework. To improve the generalization of our method for broader applicability, we refine the existing chart element categorization and standardized 18 classes for chart basic elements, excluding plot elements. Our CACHED method, with the updated category of chart elements, achieves state-of-the-art performance in our experiments, underscoring the importance of context in chart element detection. Extending our method to the bar plot detection task, we obtain the best result on the PMC test dataset.",
    "code_link": "https://github.com/pengyu965/ChartDete",
    "doi": "https://arxiv.org/abs/2305.04151",
    "authors": "Pengyu Yan, Saleem Ahmed, David Doermann",
    "categories": [
      "Low-level Information Perception"
    ]
  },
  {
    "title": "DASHBOARDQA: Benchmarking Multimodal Agents for Question Answering on Interactive Dashboards",
    "image": "figure/DASHBOARDQA.PNG",
    "year": "2025",
    "keywords": "DASHBOARDQA\nBenchmarking\nMultimodal Agents\nQuestion Answering\nInteractive Dashboards\nVision-Language Models",
    "abstract": "Dashboards are powerful visualization tools fordata-driven decision-making, integrating mul-tiple interactive views that allow users to ex-plore, filter, and navigate data. Unlike staticcharts, dashboards support rich interactivity，Which is essential for uncovering insights inreal-world analytical workflows. However, ex-isting question-answering benchmarks for datavisualizations largely overlook this interactivity，focusing instead on static charts. This limita-tion severely constrains their ability to evaluatethe capabilities of modern multimodal agentsdesigned for GUl-based reasoning. To addressthis gap, we introduce DASHBOARDQA, thefirst benchmark explicitly designed to assesshow vision-language GUl agents comprehendand interact with real-world dashboards. Thebenchmark includes 292 tasks on 112 interac-tive dashboards, encompassing 405 questionanswer pairs overall. These questions span fivecategories: multiple-choice, factoid, hypothet-ical, multi-dashboard, and conversational. Byassessing a variety of leading closed- and open-source GUl agents, our analysis reveals theirkey limitations, particularly in grounding dash-board elements, planning interaction trajecto-ries, and performing reasoning. Our findingsindicate that interactive dashboard reasoning isa challenging task overall for all the VLMsevaluated. Even the top-performing agentsstruggle; for instance, the best agent based onGemini-Pro-2.5 achieves only 38.69% accu-racy, while the OpenAI CUA agent reaches just22.69%， demonstrating the benchmark’s signif-icant difhiculty. We release DASHBOARDQAat https://github.com/vis-nlp/DashboardQA.",
    "code_link": "https://github.com/vis-nlp/DashboardQA",
    "doi": "https://aclanthology.org/2026.findings-eacl.177/",
    "authors": "Aaryaman Kartha, Ahmed Masry, Mohammed Saidul Islam, Thinh Lang, Shadikur Rahman, Ridwan Mahbub, Mizanur Rahman, Mahir Ahmed, Md Rizwan Parvez, Enamul Hoque, Shafiq Joty",
    "categories": [
      "Multimodal Interaction Perception",
      "Agentic Visual Analytics"
    ]
  },
  {
    "title": "DATANARRATIVE: Automated Data-Driven Storytelling with Visualizations and Texts",
    "image": "figure/DATANARRATIVE.PNG",
    "year": "2024",
    "keywords": "Data-Driven Storytelling  \nVisualizations  \nTexts  \nLarge Language Models (LLMs)  \nAutomated Methods  \nNarrative Techniques  \nBenchmark  \nMultiagent Framework  \nData Tables  \nHuman Evaluations",
    "abstract": "Data-driven storytelling is a powerful method for conveying insights by combining narrative techniques with visualizations and text. These stories integrate visual aids, such as highlighted bars and lines in charts, along with textual annotations explaining insights. However, creating such stories requires a deep understanding of the data and meticulous narrative planning, often necessitating human intervention, which can be time-consuming and mentally taxing. While Large Language Models (LLMs) excel in various NLP tasks, their ability to generate coherent and comprehensive data stories remains underexplored. In this work, we introduce a novel task for data story generation and a benchmark containing 1,449 stories from diverse sources. To address the challenges of crafting coherent data stories, we propose a multi-agent framework employing two LLM agents designed to replicate the human storytelling process: one for understanding and describing the data (Reflection), generating the outline, and narration, and another for verification at each intermediary step. While our agentic framework generally outperforms non-agentic counterparts in both model-based and human evaluations, the results also reveal unique challenges in data story generation.",
    "code_link": "",
    "doi": "https://aclanthology.org/2024.emnlp-main.1073/",
    "authors": "Mohammed Saidul Islam, Md Tahmid Rahman Laskar, Md Rizwan Parvez, Enamul Hoque, Shafiq Joty",
    "categories": [
      "Multi-view and Narrative Visualization Composition"
    ]
  },
  {
    "title": "DEPLOT:One-shot visual language reasoning by plot-to-table translation",
    "image": "figure/DEPLOT.PNG",
    "year": "2023",
    "keywords": "Visual language reasoning\nPlot-to-text translation\nModality conversion\nLarge language models\nFew-shot learning\nTable matching metric",
    "abstract": "Visual language such as charts and plots is ubiquitous in the human world.Comprehending plots and charts requires strong reasoning skills.Prior state-of-the-art (SOTA)models require at least tens of thousands of training examples and their reasoning capabilities are still much limited,especially on complex humanwritten queries.This paper presents the first few(one)-shot solution to visual language reasoning.We decompose the challenge of visual language reasoning into two steps:(1)plot-to-text translation,and (2)reasoning over the translated text.The key in this method is a modality conversion module,named as DEPLOT,which translates the image of a plot or chart to a linearized table.The output of DEPLOT can then be directly used to prompt a pretrained large language model (LLM),exploiting the few-shot reasoning capabilities of LLMs.To obtain DEPLOT,we standardize the plot-to-table task by establishing unified task formats and metrics,and train DEPLOT endto-end on this task.DEPLOT can then be used off-the-shelf together with LLMs in a plugand-play fashion.Compared with a SOTA model finetuned on thousands of data points,DEPLOT+LLM with just one-shot prompting achieves a 29.4%improvement over finetuned SOTA on human-written queries from the task of chart QA.",
    "code_link": "github.com/google-research/googleresearch/tree/master/deplot",
    "doi": "https://aclanthology.org/2023.findings-acl.660/",
    "authors": "Fangyu Liu, Julian Martin Eisenschlos, Francesco Piccinno, Syrine Krichene, Chenxi Pang, Kenton Lee, Mandar Joshi, Wenhu Chen, Nigel Collier, Yasemin Altun",
    "categories": [
      "Low-level Information Perception",
      "High-level Semantic Cognition"
    ]
  },
  {
    "title": "DVQA: Understanding Data Visualizations via Question Answering",
    "image": "figure/DVQA.PNG",
    "year": "2018",
    "keywords": "Data Visualization\nQuestion Answering\nBar Charts\nVQA Algorithms\nChart-specific Words\nDynamic Encoding",
    "abstract": "Bar charts are an effective way to convey numeric information,but today's algorithms cannot parse them.Existing methods fail when faced with even minor variations in appearance.Here,we present DVQA,a dataset that tests many aspects of bar chart understanding in a question answering framework.Unlike visual question answering (VQA),DVQA requires processing words and answers that are unique to a particular bar chart.State-of-the-art VQA algorithms perform poorly on DVQA,and we propose two strong baselines that perform considerably better.Our work will enable algorithms to automatically extract numeric and semantic information from vast quantities of bar charts found in scientific publications,Internet articles,business reports,and many other areas.",
    "code_link": "",
    "doi": "https://openaccess.thecvf.com/content_cvpr_2018/html/Kafle_DVQA_Understanding_Data_CVPR_2018_paper.html",
    "authors": "Kushal Kafle, Brian Price, Scott Cohen, Christopher Kanan",
    "categories": [
      "High-level Semantic Cognition"
    ]
  },
  {
    "title": "Dashchat: Interactive authoring of industrial dashboard design prototypes through conversation with llm-powered agents",
    "image": "figure/Dashchat_ Interactive authoring of industrial dashboard design prototypes through conversation with llm-powered agents.PNG",
    "year": "2026",
    "keywords": "Dashboard, LLM, Multi-Agent, Industrial Visualization, Natural Language Interface, Design Prototype",
    "abstract": "Performance dashboards are designed for and deployed within industrial settings to showcase and monitor their operational performance. In practice, the ideation and negotiation phases demand rapid prototyping and iteration to align with evolving client needs. However, existing tools compel designers to compromise either on iteration speed or on the meticulous handling of visual complexities. Addressing the gaps, we introduce DashChat, an interactive system for generating performance dashboard prototypes through conversation. We first derived common design patterns by analyzing 114 high-quality dashboards. We then developed a novel multi-agent pipeline that translates natural language intentions into high-quality prototypes. We evaluated DashChat through a user study with 28 participants, demonstrating its effectiveness in facilitating the prototyping process while ensuring design quality. Our work contributes not only an understanding of the challenges in real-world performance dashboard design workflows, but also a novel conversational system that embodies a new paradigm for AI-assisted creative work.",
    "code_link": "",
    "doi": "https://dl.acm.org/doi/10.1145/3772363.3798634",
    "categories": [
      "Multi-view and Narrative Visualization Composition"
    ],
    "authors": "Siqi Shen, Ziyue Lin, Honghui Mei, Wanchen Liu, Chengye Xin, Wenzhuo Dai, Siming Chen, Xiao Wen, Xingyu Lan"
  },
  {
    "title": "Data Formulator: AI-Powered Concept-Driven Visualization Authoring",
    "image": "figure/Data_Formulator_AI-Powered_Concept-Driven_Visualization_Authoring.PNG",
    "year": "2023",
    "keywords": "AI\nvisualization authoring\ndata transformation\nprogramming by example\nnatural language\nlarge language model",
    "abstract": "With most modern visualization tools,authors need to transform their data into tidy formats to create visualizations they want.Because this requires experience with programming or separate data processing tools,data transformation remains a barrier in visualization authoring.To address this challenge,we present a new visualization paradigm,concept binding,that separates high-level visualization intents and low-level data transformation steps,leveraging an AI agent.We realize this paradigm in Data Formulator,an interactive visualization authoring tool.With Data Formulator,authors first define data concepts they plan to visualize using natural languages or examples,and then bind them to visual channels.Data Formulator then dispatches its AI-agent to automatically transform the input data to surface these concepts and generate desired visualizations.When presenting the results (transformed table and output visualizations)from the AI agent,Data Formulator provides feedback to help authors inspect and understand them.A user study with 10participants shows that participants could learn and use Data Formulator to create visualizations that involve challenging data transformations,and presents interesting future research directions.",
    "code_link": "",
    "doi": "https://ieeexplore.ieee.org/abstract/document/10292609",
    "authors": "Chenglong Wang, John Thompson, Bongshin Lee",
    "categories": [
      "Conditional Visualization Synthesis"
    ]
  },
  {
    "title": "Data visualization recommendation: Literature review and future perspectives",
    "image": "figure/Data visualization recommendation_ Literature review and future perspectives.PNG",
    "year": "2026",
    "keywords": "Visualization Recommendation, Literature Review, Machine Learning, Rule-based, Evaluation",
    "abstract": "The constant growth in data generation, driven by technological advancement, highlights the need to organize information to extract relevant knowledge. In this context, visual representations emerge as effective tools to simplify this complex task. The automation of this process can be achieved through visualization recommendation systems. This work aims to improve the understanding of data visualization recommendations by synthesizing current literature to identify research gaps and outline initial requirements for developing prototypes and tools in this area. To achieve this, we conducted a systematic literature mapping followed by forward snowballing, covering the period from 2017 to 2025, through which we carefully selected and analyzed 89 papers on data visualization recommendations. We provide an overview of visualization recommendation systems, identifying employed techniques and categorizing studies based on different recommendation approaches. We also guide the selection of algorithms and methods for developing automatic and semiautomatic recommendation systems and present lessons learned and future research possibilities.",
    "code_link": "",
    "doi": "https://doi.org/10.1177/14738716251409351",
    "categories": [
      "Visualization Recommendation"
    ],
    "authors": "Andre Fernando Rollwagenj, Isabel Harb Manssour"
  },
  {
    "title": "Deconstructing Categorization in Visualization Recommendation: A Taxonomy and Comparative Study",
    "image": "figure/Deconstructing Categorization in Visualization Recommendation_ A Taxonomy and Comparative Study.PNG",
    "year": "2021",
    "keywords": "Visualization Recommendation, Categorization, Taxonomy, Analytical Workflow, User Study",
    "abstract": "Visualization recommendation (VisRec) systems provide users with suggestions for potentially interesting and useful next steps during exploratory data analysis. These recommendations are typically organized into categories based on their analytical actions, i.e., operations employed to transition from the current exploration state to a recommended visualization. However, despite the emergence of a plethora of VisRec systems in recent work, the utility of the categories employed by these systems in analytical workflows has not been systematically investigated. Our article explores the efficacy of recommendation categories by formalizing a taxonomy of common categories and developing a system, Frontier, that implements these categories. Using Frontier, we evaluate workflow strategies adopted by users and how categories influence those strategies. Participants found recommendations that add attributes to enhance the current visualization and recommendations that filter to sub-populations to be comparatively most useful during data exploration. Our findings pave the way for next-generation VisRec systems that are adaptive and personalized via carefully chosen, effective recommendation categories.",
    "code_link": "",
    "doi": "https://ieeexplore.ieee.org/document/9444894",
    "categories": [
      "Visualization Recommendation"
    ],
    "authors": "Doris Jung-Lin Lee, Vidya Setlur, Melanie Tory, Karrie Karahalios, Aditya Parameswaran"
  },
  {
    "title": "Deep Colormap Extraction From Visualization",
    "image": "figure/Deep_Colormap_Extraction_From_Visualizations.PNG",
    "year": "2021",
    "keywords": "Color extraction\nInformation visualization\nDeep learning\nColor histogram",
    "abstract": "This article presents a new approach based on deep learning to automatically extract colormaps from visualizations. After summarizing colors in an input visualization image as a Lab color histogram, we pass the histogram to a pre-trained deep neural network, which learns to predict the colormap that produces the visualization. To train the network, we create a new dataset of ∼64K visualizations that cover a wide variety of data distributions, chart types, and colormaps. The network adopts an atrous spatial pyramid pooling module to capture color features at multiple scales in the input color histograms. We then classify the predicted colormap as discrete or continuous, and refine the predicted colormap based on its color histogram. Quantitative comparisons to existing methods show the superior performance of our approach on both synthetic and real-world visualizations. We further demonstrate the utility of our method with two use cases, i.e., color transfer and color remapping.",
    "code_link": "https://bit.ly/3bjMdyV",
    "doi": "https://ieeexplore.ieee.org/document/9395231",
    "authors": "Lin-Ping Yuan, Wei Zeng, Siwei Fu, Zhiliang Zeng, Haotian Li, Chi-Wing Fu, Huamin Qu",
    "categories": [
      "Low-level Information Perception",
      "Conditional Visualization Synthesis"
    ]
  },
  {
    "title": "Distill Visual Chart Reasoning Ability from LLMs to MLLMs",
    "image": "figure/Distill Visual Chart Reasoning Ability from LLMs to MLLMs.PNG",
    "year": "2025",
    "keywords": "Multimodal large language models\nVisual chart reasoning\nData synthesis\nCode-as-Intermediary Translation\nREACHQA dataset",
    "abstract": "Solving complex chart Q&A tasks requires advanced visual reasoning abilities in multimodal large language models (MLLMs). Recent studies highlight that these abilities consist of two main parts: recognizing key information from visual inputs and conducting reasoning over it. Thus, a promising approach to enhance MLLMs is to construct relevant training data focusing on the two aspects. However, collecting and annotating complex charts and questions is costly and time-consuming, and ensuring the quality of annotated answers remains a challenge. In this paper, we propose Code-as-Intermediary Translation (CIT), a cost-effective, efficient and easily scalable data synthesis method for distilling visual reasoning abilities from LLMs to MLLMs. The code serves as an intermediary that translates visual chart representations into textual representations, enabling LLMs to understand cross-modal information. Specifically, we employ text-based synthesizing techniques to construct chart-plotting code and produce ReachQA, a dataset containing 3k reasoning-intensive charts and 20k Q&A pairs to enhance both recognition and reasoning abilities. Experiments show that when fine-tuned with our data, models not only perform well on chart-related benchmarks, but also demonstrate improved multimodal reasoning abilities on general mathematical benchmarks such as MathVista.",
    "code_link": "https://github.com/hewei2001/ReachQA",
    "doi": "https://openreview.net/forum?id=cjlPAgNifc",
    "authors": "Wei He, Zhiheng Xi, Wanxu Zhao, Xiaoran Fan, Yiwen Ding, Zifei Shan, Tao Gui, Qi Zhang, Xuanjing Huang",
    "categories": [
      "High-level Semantic Cognition"
    ]
  },
  {
    "title": "Diverse interaction recommendation for public users exploring multi-view visualization using deep learning",
    "image": "figure/Diverse interaction recommendation for public users exploring multi-view visualization using deep learning.PNG",
    "year": "2022",
    "keywords": "Interaction Recommendation, Multi-view Visualization, LSTM, User Behavior, Personalized Recommendation, Deep Learning",
    "abstract": "Interaction is an important channel to offer users insights in interactive visualization systems. However, which interaction to operate and which part of data to explore are hard questions for public users facing a multi-view visualization for the first time. Making these decisions largely relies on professional experience and analytic abilities, which is a huge challenge for non-professionals. To solve the problem, we propose a method aiming to provide diverse, insightful, and real-time interaction recommendations for novice users. Building on the Long-Short Term Memory Model (LSTM) structure, our model captures users' interactions and visual states and encodes them in numerical vectors to make further recommendations. Through an illustrative example of a visualization system about Chinese poets in the museum scenario, the model is proven to be workable in systems with multi-views and multiple interaction types. A further user study demonstrates the method's capability to help public users conduct more insightful and diverse interactive explorations and gain more accurate data insights.",
    "code_link": "",
    "doi": "https://ieeexplore.ieee.org/abstract/document/9903596",
    "categories": [
      "Interaction Generation and Recommendation"
    ],
    "authors": "Yixuan Li, Yusheng Qi, Yang Shi, Qing Chen, Nan Cao, Siming Chen"
  },
  {
    "title": "DracoGPT:Extracting Visualization Design Preferences from Large Language Models",
    "image": "figure/DracoGPT_Extracting_Visualization_Design_Preferences_from_Large_Language_Models.PNG",
    "year": "2025",
    "keywords": "Visualization\nLarge Language Models\nVisualization Recommendation\nGraphical Perception",
    "abstract": "Trained on vast corpora, Large Language Models (LLMs) have the potential to encode visualization design knowledge and best practices. However, if they fail to do so, they might provide unreliable visualization recommendations. What visualization design preferences, then, have LLMs learned? We contribute DracoGPT, a method for extracting, modeling, and assessing visualization design preferences from LLMs. To assess varied tasks, we develop two pipelines—DracoGPT-Rank and DracoGPT-Recommend—to model LLMs prompted to either rank or recommend visual encoding specifications. We use Draco as a shared knowledge base in which to represent LLM design preferences and compare them to best practices from empirical research. We demonstrate that DracoGPT can accurately model the preferences expressed by LLMs, enabling analysis in terms of Draco design constraints. Across a suite of backing LLMs, we find that DracoGPT-Rank and DracoGPT-Recommend moderately agree with each other, but both substantially diverge from guidelines drawn from human subjects experiments. Future work can build on our approach to expand Draco's knowledge base to model a richer set of preferences and to provide a robust and cost-effective stand-in for LLMs.",
    "code_link": "",
    "doi": "https://dl.acm.org/doi/10.1109/TVCG.2024.3456350",
    "authors": "Huichen Will Wang, Mitchell Gordon, Leilani Battle, Jeffrey Heer",
    "categories": [
      "Visualization Recommendation"
    ]
  },
  {
    "title": "DuetSVG:Unified Multimodal SVG Generation with Internal Visual Guidance",
    "image": "figure/DuetSVG.PNG",
    "year": "2025",
    "keywords": "Scalable Vector Graphics\nMultimodal Model\nUnified Generation\nInternal Visual Guidance\nTest-Time Scaling",
    "abstract": "Recent vision-language model (VLM)-based approaches have achieved impressive results on SVG generation. However, because they generate only text and lack visual signals during decoding, they often struggle with complex semantics and fail to produce visually appealing or geometrically coherent SVGs. We introduce DuetSVG, a unified multimodal model that jointly generates image tokens and corresponding SVG tokens in an end-to-end manner. DuetSVG is trained on both image and SVG datasets. At inference, we apply a novel test-time scaling strategy that leverages the model's native visual predictions as guidance to improve SVG decoding quality. Extensive experiments show that our method outperforms existing methods, producing visually faithful, semantically aligned, and syntactically clean SVGs across a wide range of applications.",
    "code_link": "https://intchous.github.io/DuetSVG-site",
    "doi": "https://arxiv.org/abs/2512.10894",
    "authors": "Peiying Zhang, Nanxuan Zhao, Matthew Fisher, Yiran Xu, Jing Liao, Difan Liu",
    "categories": [
      "Conditional Visualization Synthesis"
    ]
  },
  {
    "title": "DynaVis: Dynamically Synthesized UI Widgets for Visualization Editing",
    "image": "figure/DynaVis.PNG",
    "year": "2024",
    "keywords": "User Experience Design\nVisualization\nUsability Study",
    "abstract": "Users often rely on GUls to edit and interact with visualizations - a daunting task due to thelarge space of editing options. As a result, users are either overwhelmed by a complex UI orconstrained by a custom Ul with a tailored, fixed subset of options with limited editingflexibility. Natural Language Interfaces （NLIs） are emerging as a feasible alternative for usersto specify edits. However, NLIs forgo the advantages of traditional GUl: the ability to exploreand repeat edits and see instant visual feedback.We introduce DynaVis, which blends natural language and dynamically synthesized UIwidgets. As the user describes an editing task in natural language, DynaVis performs the editand synthesizes a persistent widget that the user can interact with to make furthermodifications. Study participants （n=24） preferred DynaVis over the NLl-only interface citingease of further edits and editing confidence due to immediate visual feedback.",
    "code_link": "",
    "doi": "https://dl.acm.org/doi/10.1145/3613904.3642639",
    "authors": "Priyan Vaithilingam, Elena L. Glassman, Jeevana Priya Inala, Chenglong Wang",
    "categories": [
      "Conditional Visualization Synthesis",
      "Interaction Generation and Recommendation"
    ]
  },
  {
    "title": "Enhancing Data Literacy On-Demand: LLMs as Guides for Novices in Chart Interpretation",
    "image": "figure/Enhancing_Data_Literacy_On-Demand_LLMs_as_Guides_for_Novices_in_Chart_Interpretation.PNG",
    "year": "2024",
    "keywords": "Large language model\nVisual communication\nVisualization",
    "abstract": "With the growing complexity and volume of data, visualizations have become more intricate, often requiring advanced techniques to convey insights. These complex charts are prevalent in everyday life, and individuals who lack knowledge in data visualization may find them challenging to understand. This paper investigates using Large Language Models (LLMs) to help users with low data literacy understand complex visualizations. While previous studies focus on text interactions with users, we noticed that visual cues are also critical for interpreting charts. We introduce an LLM application that supports both text and visual interaction for guiding chart interpretation. Our study with 26 participants revealed that the in-situ support effectively assisted users in interpreting charts and enhanced learning by addressing specific chart-related questions and encouraging further exploration. Visual communication allowed participants to convey their interests straightforwardly, eliminating the need for textual descriptions. However, the LLM assistance led users to engage less with the system, resulting in fewer insights from the visualizations. This suggests that users, particularly those with lower data literacy and motivation, may have over-relied on the LLM agent. We discuss opportunities for deploying LLMs to enhance visualization literacy while emphasizing the need for a balanced approach.",
    "code_link": "",
    "doi": "https://ieeexplore.ieee.org/abstract/document/10555321",
    "authors": "Kiroong Choe, Chaerin Lee, Soohyun Lee, Jiwon Song, Aeri Cho, Nam Wook Kim, Jinwook Seo",
    "categories": [
      "Multimodal Interaction Perception",
      "Interaction Generation and Recommendation"
    ]
  },
  {
    "title": "Ephemera: Language as a Virus-AI-driven Interactive and Immersive Art Installation",
    "image": "figure/Ephemera_ Language as a Virus-AI-driven Interactive and Immersive Art Installation.PNG",
    "year": "2024",
    "keywords": "Interactive Installation, AI Art, Generative AI, LLM, Speech Interaction, Immersive Visualization",
    "abstract": "In this paper, we introduce the speech-based interactive and immersive installation, Ephemera, as an artistic response to the linguistic taboos encountered in daily communication, prompting audience reflection and thoughts. Within this project, we symbolize the dissemination chain of language through a computational ecosystem. Utilizing the surreal 'virus' as an embodiment of banned words, we employ generative models for visual representation, leverage large language models for communicative agents, and use machine learning for behavioral engines, ultimately simulating a digitally autonomous micro-organism world of forbidden language. We contextualized the speech-to-content generation process to draw the audience's attention to the power and constraints of language. Additionally, we examine AI's comprehension of censored words and ethical considerations. Finally, our artistic project proposes the aphorism \"Language as a virus, art as an antibody,\" offering novel perspectives on language taboos and art-technology intersections.",
    "code_link": "",
    "doi": "https://dl.acm.org/doi/10.1145/3664219",
    "categories": [
      "Multimodal Interaction Perception",
      "Interaction Generation and Recommendation"
    ],
    "authors": "Jiayang Huang, Yue Huang, David Kei-Man Yip, Varvara Guljajeva"
  },
  {
    "title": "Evaluating the Semantic Profiling Abilities of LLMs for Natural Language Utterances in Data Visualization",
    "image": "figure/Evaluating_the_Semantic_Profiling_Abilities_of_LLMs_for_Natural_Language_Utterances_in_Data_Visualization.PNG",
    "year": "2024",
    "keywords": "Human-centered computing\nVisualization\nEmpirical studies in visualization",
    "abstract": "Automatically generating data visualizations in response to human utterances on datasets necessitates a deep semantic understanding of the utterance,including implicit and explicit references to data attributes,visualization tasks,and necessary data preparation steps.Natural Language Interfaces (NLIs)for data visualization have explored ways to infer such information,yet challenges persist due to inherent uncertainty in human speech.Recent advances in Large Language Models (LLMs)provide an avenue to address these challenges,but their ability to extract the relevant semantic information remains unexplored.In this study,we evaluate four publicly available LLMs (GPT-4,Gemini-Pro,Llama3,and Mixtral),investigating their ability to comprehend utterances even in the presence of uncertainty and identify the relevant data context and visual tasks.Our findings reveal that LLMs are sensitive to uncertainties in utterances.Despite this sensitivity,they are able to extract the relevant data context.However,LLMs struggle with inferring visualization tasks.Based on these results,we highlight future research directions on using LLMs for visualization generation.Our supplementary materials have been shared on GitHub: https://github.com/hdi-umd/Semantic_Profiling_LLM_Evaluation.",
    "code_link": "https://github.com/hdi-umd/Semantic_Profiling_LLM_Evaluation",
    "doi": "https://ieeexplore.ieee.org/abstract/document/10771116",
    "authors": "Hannah K. Bako, Arshnoor Bhutani, Xinyi Liu, Kwesi A. Cobbina, Zhicheng Liu",
    "categories": [
      "Multimodal Interaction Perception"
    ]
  },
  {
    "title": "Exploring the Capability of LLMs in Performing Low-Level Visual Analytic Tasks on SVG Data Visualizations",
    "image": "figure/Exploring the Capability of LLMs in Performing Low-Level Visual Analytic Tasks on SVG Data Visualizations.PNG",
    "year": "2024",
    "keywords": "Data Visualization  \nLarge Language Models (LLMs)  \nVisual Analytics Tasks  \nScalable Vector Graphics",
    "abstract": "Data visualizations help extract insights from datasets,but reaching these insights requires decomposing high level goals into low-level analytic tasks that can be complex due to varying degrees of data literacy and visualization experience.Recent advancements in large language models (LLMs)have shown promise for lowering barriers for users to achieve tasks such as writing code and may likewise facilitate visualization insight.Scalable Vector Graphics (SVG),a text-based image format common in data visualizations,matches well with the text sequence processing of transformer-based LLMs.In this paper,we explore the capability of LLMs to perform 10lowlevel visual analytic tasks defined by Amar,Eagan,and Stasko directly on SVG-based visualizations [2].Using zero-shot prompts,we instruct the models to provide responses or modify the SVG code based on given visualizations.Our findings demonstrate that LLMs can effectively modify existing SVG visualizations for some tasks like Cluster but perform poorly on tasks requiring mathematical operations like Compute Derived Value.We also discovered that LLM performance can vary based on factors such as the number of data points,the presence of value labels,and the chart type.Our findings contribute to gauging the general capabilities of LLMs and highlight the need for further exploration and development to fully harness their potential in supporting visual analytic tasks.",
    "code_link": "https://github.com/lebretou/SVG_taxonomy",
    "doi": "https://ieeexplore.ieee.org/abstract/document/10771094",
    "authors": "Zhongzheng Xu, Emily Wall",
    "categories": [
      "High-level Semantic Cognition",
      "Conditional Visualization Synthesis"
    ]
  },
  {
    "title": "FERRET-UI 2: MASTERING UNIVERSAL USER INTERFACE UNDERSTANDING ACROSS PLATFORMS",
    "image": "figure/Ferret-UI 2.PNG",
    "year": "2025",
    "keywords": "User Interface\nMultimodal Large Language Model\nPlatform Diversity\nResolution Variation\nData Limitation\nCross-Platform Transfer",
    "abstract": "Building a generalist model for user interface (UI) understanding is challenging due to various foundational issues, such as platform diversity, resolution variation, and data limitation. In this paper, we introduce Ferret-UI 2, a multimodal large language model (MLLM) designed for universal UI understanding across a wide range of platforms, including iPhone, Android, iPad, Webpage, and AppleTV. Building on the foundation of Ferret-UI, Ferret-UI 2 introduces three key innovations: support for multiple platform types, high-resolution perception through adaptive scaling, and advanced task training data generation powered by GPT-4o with set-of-mark visual prompting. These advancements enable Ferret-UI 2 to perform complex, user-centered interactions, making it highly versatile and adaptable for the expanding diversity of platform ecosystems. Extensive empirical experiments on referring, grounding, user-centric advanced tasks (comprising 9 subtasks × 5 platforms), GUIDE next-action prediction dataset, and GUI-World multi-platform benchmark demonstrate that Ferret-UI 2 significantly outperforms Ferret-UI, and also shows strong cross-platform transfer capabilities.",
    "code_link": "",
    "doi": "https://proceedings.iclr.cc/paper_files/paper/2025/hash/f7baab9bb701848e75f3cc119bdf57bc-Abstract-Conference.html",
    "authors": "Zhangheng Li, Keen You, Haotian Zhang, Di Feng, Harsh Agrawal, Xiujun Li, Mohana Prasad Sathya Moorthy, Jeff Nichols, Yinfei Yang, Zhe Gan",
    "categories": [
      "Multimodal Interaction Perception",
      "Interaction Generation and Recommendation"
    ]
  },
  {
    "title": "Ferret-UI:Grounded Mobile UI Understanding with Multimodal LLMs",
    "image": "figure/Ferret-UI.PNG",
    "year": "2024",
    "keywords": "UI Understanding  \nMultimodal Large Language Model (MLLM)",
    "abstract": "Recent advancements in multimodal large language models (MLLMs)have been noteworthy,yet,these general-domain MLLMs often fall short in their ability to comprehend and interact effectively with user interface (UI)screens.In this paper,we present Ferret-UI,a new MLLM tailored for enhanced understanding of mobile UI screens,equipped with referring,grounding,and reasoning capabilities.Given that UI screens typically exhibit a more elongated aspect ratio and contain smaller objects of interest (e.g.,icons,texts)than natural images,we incorporate \"any resolution\"on top of Ferret to magnify details and leverage enhanced visual features.Specifically,each screen is divided into 2sub-images based on the original aspect ratio and sub-images are encoded separately as additional features.We meticulously gather training samples from an extensive range of elementary UI tasks,such as icon recognition,find text,and widget listing.These samples are formatted for instruction-following with region annotations to facilitate precise referring and grounding.To augment the model's reasoning ability,we further compile a dataset for advanced tasks,including detailed description,conversations,and function inference.After training on the curated datasets,Ferret-UI exhibits outstanding comprehension of UI screens and the capability to execute open-ended instructions.For model evaluation,we establish a comprehensive benchmark encompassing all the aforementioned tasks.Ferret-UI excels not only beyond most open-source UI MLLMs,but also surpasses GPT-4V on all the elementary UI tasks.",
    "code_link": "",
    "doi": "https://link.springer.com/chapter/10.1007/978-3-031-73039-9_14",
    "authors": "Keen You, Haotian Zhang, Eldon Schoop, Floris Weers, Amanda Swearngin, Jeffrey Nichols, Yinfei Yang, Zhe Gan",
    "categories": [
      "High-level Semantic Cognition"
    ]
  },
  {
    "title": "From data to story: Towards automatic animated data video creation with llm-based multi-agent systems",
    "image": "figure/From data to story_ Towards automatic animated data video creation with llm-based multi-agent systems.PNG",
    "year": "2024",
    "keywords": "Data Storytelling, LLM, Multi-Agent, Animated Data Video, Automation, Narrative Visualization",
    "abstract": "Creating data stories from raw data is challenging due to humans' limited attention spans and the need for specialized skills. Recent advancements in large language models (LLMs) offer great oppor-tunities to develop systems with autonomous agents to streamline the data storytelling workflow. Though multi-agent systems have benefits such as fully realizing LLM potentials with decomposed tasks for individual agents, designing such systems also faces challenges in task decomposition, performance optimization for sub-tasks, and workflow design. To better understand these issues, we develop Data Director, an LLM-based multi-agent system designed to automate the creation of animated data videos, a representative genre of data stories. Data Director interprets raw data, breaks down tasks, designs agent roles to make informed decisions automatically, and seamlessly integrates diverse components of data videos. A case study demonstrates Data Director's effectiveness in generating data videos. Throughout development, we have derived lessons learned from addressing challenges, guiding further advancements in autonomous agents for data storytelling. We also shed light on future directions for global optimization, human-in-the-loop design, and the application of advanced multimodal LLMs.",
    "code_link": "",
    "doi": "https://ieeexplore.ieee.org/abstract/document/10766492",
    "categories": [
      "Multi-view and Narrative Visualization Composition"
    ],
    "authors": "Leixian Shen, Haotian Li, Yun Wang, Huamin Qu"
  },
  {
    "title": "GVVST: Image-driven style extraction from graph visualizations for visual style transfer",
    "image": "figure/GVVST_Image-Driven_Style_Extraction_From_Graph_Visualizations_for_Visual_Style_Transfer.PNG",
    "year": "2024",
    "keywords": "Graph Visualization, Style Transfer, Deep Learning, Saliency Detection, Multi-label Classification, Visual Style",
    "abstract": "Incorporating automatic style extraction and transfer from existing well-designed graph visualizations can significantly alleviate the designer’s workload. There are many types of graph visualizations. In this paper, our work focuses on node-link diagrams. We present a novel approach to streamline the design process of graph visualizations by automatically extracting visual styles from well-designed examples and applying them to other graphs. Our formative study identifies the key styles that designers consider when crafting visualizations, categorizing them into global and local styles. Leveraging deep learning techniques such as saliency detection models and multi-label classification models, we develop end-to-end pipelines for extracting both global and local styles. Global styles focus on aspects such as color scheme and layout, while local styles are concerned with the finer details of node and edge representations. Through a user study and evaluation experiment, we demonstrate the efficacy and time-saving benefits of our method, highlighting its potential to enhance the graph visualization design process.",
    "code_link": "",
    "doi": "https://ieeexplore.ieee.org/document/10734252",
    "categories": [
      "Conditional Visualization Synthesis"
    ],
    "authors": "Sicheng Song, Yipeng Zhang, Yanna Lin, Huamin Qu, Changbo Wang, Chenhui Li"
  },
  {
    "title": "Generative Data Visualization with JSON Representations",
    "image": "figure/Generative_Data_Visualization_with_JSON_Representations.PNG",
    "year": "2025",
    "keywords": "data visualization  \ngenerative models  \nJSON representations  \nexplainability",
    "abstract": "Data visualization can provide a wealth of insights for any organization.However,creating data visualizations can take significant time and domain-specific knowledge.Generative data visualization has the potential to streamline this process by creating complex and insightful visualizations with minimal user intervention.Large Language Models (LLMs)can respond to natural language queries with various media.However,they have yet to be widely applied to data visualization tasks in an enterprise setting due to the complexities of model training,resource consumption,and upkeep.This study tests an approach to generative data visualization through in-context learning,using an LLM to output user data visualization requests in the JSON format.Overall,the LLM performs poorly,even with multiple in-context examples.However,the study also yields insights into targeted adjustments that can potentially boost in-context learning for this use-case.",
    "code_link": "",
    "doi": "https://ieeexplore.ieee.org/document/11050619",
    "authors": "Charles Glaser, Erhan Guven",
    "categories": [
      "Conditional Visualization Synthesis"
    ]
  },
  {
    "title": "GenoREC: A Recommendation System for Interactive Genomics Data Visualization",
    "image": "figure/GenoREC_A_Recommendation_System_for_Interactive_Genomics_Data_Visualization.PNG",
    "year": "2022",
    "keywords": "genomics\nvisualization\nrecommendation systems\ndata\ntasks",
    "abstract": "Interpretation of genomics data is critically reliant on the application of a wide range of visualization tools. A large number of visualization techniques for genomics data and different analysis tasks pose a significant challenge for analysts: which visualization technique is most likely to help them generate insights into their data? Since genomics analysts typically have limited training in data visualization, their choices are often based on trial and error or guided by technical details, such as data formats that a specific tool can load. This approach prevents them from making effective visualization choices for the many combinations of data types and analysis questions they encounter in their work. Visualization recommendation systems assist non-experts in creating data visualization by recommending appropriate visualizations based on the data and task characteristics. However, existing visualization recommendation systems are not designed to handle domain-specific problems. To address these challenges, we designed GenoREC, a novel visualization recommendation system for genomics. GenoREC enables genomics analysts to select effective visualizations based on a description of their data and analysis tasks. Here, we present the recommendation model that uses a knowledge-based method for choosing appropriate visualizations and a web application that enables analysts to input their requirements, explore recommended visualizations, and export them for their usage. Furthermore, we present the results of two user studies demonstrating that GenoREC recommends visualizations that are both accepted by domain experts and suited to address the given genomics analysis problem. All supplemental materials are available at https://osf.io/y73pt.",
    "code_link": "https://osf.io/y73pt/overview",
    "doi": "https://ieeexplore.ieee.org/document/9908148",
    "authors": "Aditeya Pandey, Sehi L'Yi, Qianwen Wang, Michelle A. Borkin, Nils Gehlenborg",
    "categories": [
      "Visualization Recommendation",
      "Multi-view and Narrative Visualization Composition"
    ]
  },
  {
    "title": "How Aligned are Human Chart Takeaways and LLM Predictions? A Case Study on Bar Charts with Varying Layouts",
    "image": "figure/How_Aligned_are_Human_Chart_Takeaways_and_LLM_Predictions_A_Case_Study_on_Bar_Charts_with_Varying_Layouts.PNG",
    "year": "2024",
    "keywords": "Visualization\nGraphical Perception\nLarge Language Models",
    "abstract": "Large Language Models (LLMs) have been adopted for a variety of visualizations tasks, but how far are we from perceptually aware LLMs that can predict human takeaways? Graphical perception literature has shown that human chart takeaways are sensitive to visualization design choices, such as spatial layouts. In this work, we examine the extent to which LLMs exhibit such sensitivity when generating takeaways, using bar charts with varying spatial layouts as a case study. We conducted three experiments and tested four common bar chart layouts: vertically juxtaposed, horizontally juxtaposed, overlaid, and stacked. In Experiment 1, we identified the optimal configurations to generate meaningful chart takeaways by testing four LLMs, two temperature settings, nine chart specifications, and two prompting strategies. We found that even state-of-the-art LLMs struggled to generate semantically diverse and factually accurate takeaways. In Experiment 2, we used the optimal configurations to generate 30 chart takeaways each for eight visualizations across four layouts and two datasets in both zero-shot and one-shot settings. Compared to human takeaways, we found that the takeaways LLMs generated often did not match the types of comparisons made by humans. In Experiment 3, we examined the effect of chart context and data on LLM takeaways. We found that LLMs, unlike humans, exhibited variation in takeaway comparison types for different bar charts using the same bar layout. Overall, our case study evaluates the ability of LLMs to emulate human interpretations of data and points to challenges and opportunities in using LLMs to predict human chart takeaways.",
    "code_link": "",
    "doi": "https://ieeexplore.ieee.org/document/10681139",
    "authors": "Huichen Will Wang, Jane Hoffswell, Sao Myat Thazin Thane, Victor S. Bursztyn, Cindy Xiong Bearfield",
    "categories": [
      "High-level Semantic Cognition"
    ]
  },
  {
    "title": "How does automation shape the process of narrative visualization: A survey of tools",
    "image": "figure/How does automation shape the process of narrative visualization_ A survey of tools.PNG",
    "year": "2023",
    "keywords": "Narrative Visualization, Automation, Survey, Design Space, Authoring Tools, Data Storytelling",
    "abstract": "In recent years, narrative visualization has gained much attention. Researchers have proposed different design spaces for various narrative visualization genres and scenarios to facilitate the creation process. As users’ needs grow and automation technologies advance, increasingly more tools have been designed and developed. In this study, we summarized six genres of narrative visualization (annotated charts, infographics, timelines & storylines, data comics, scrollytelling & slideshow, and data videos) based on previous research and four types of tools (design spaces, authoring tools, ML/AI-supported tools and ML/AI-generator tools) based on the intelligence and automation level of the tools. We surveyed 105 papers and tools to study how automation can progressively engage in visualization design and narrative processes to help users easily create narrative visualizations. This research aims to provide an overview of current research and development in the automation involvement of narrative visualization tools. We discuss key research problems in each category and suggest new opportunities to encourage further research in the related domain.",
    "code_link": "",
    "doi": "https://ieeexplore.ieee.org/document/10081398",
    "categories": [
      "Multi-view and Narrative Visualization Composition"
    ],
    "authors": "Qing Chen, Shixiong Cao, Jiazhe Wang, Nan Cao"
  },
  {
    "title": "IGenBench: Benchmarking the Reliability of Text-to-Infographic Generation",
    "image": "figure/IGenBench_ Benchmarking the Reliability of Text-to-Infographic Generation.PNG",
    "year": "2026",
    "keywords": "Text-to-Infographic, Benchmark, Reliability, T2I, Evaluation, Data Encoding",
    "abstract": "Infographics are composite visual artifacts that combine data visualizations with textual and illustrative elements to communicate information. While recent text-to-image (T2I) models can generate aesthetically appealing images, their reliability in generating infographics remains unclear. Generated infographics may appear correct at first glance but contain easily overlooked issues, such as distorted data encoding or incorrect textual content. We present IGENBENCH, the first benchmark for evaluating the reliability of text-to-infographic generation, comprising 600 curated test cases spanning 30 infographic types. We design an automated evaluation framework that decomposes reliability verification into atomic yes/no questions based on a taxonomy of 10 question types. We employ multimodal large language models (MLLMs) to verify each question, yielding question-level accuracy (Q-ACC) and infographic-level accuracy (I-ACC). We comprehensively evaluate 10 state-of-the-art T2I models on IGENBENCH. Our systematic analysis reveals key insights for future model development: (i) a three-tier performance hierarchy with the top model achieving Q-ACC of 0.90 but I-ACC of only 0.49; (ii) data-related dimensions emerging as universal bottlenecks (e.g., Data Completeness: 0.21); and (iii) the challenge of achieving end-to-end correctness across all models. We release IGENBENCH at this https URL.",
    "code_link": "https://github.com/MisterBrookT/IGenBench",
    "doi": "https://arxiv.org/abs/2601.04498",
    "categories": [
      "Conditional Visualization Synthesis"
    ],
    "authors": "Yinghao Tang, Xueding Liu, Boyuan Zhang, Tingfeng Lan, Yupeng Xie, Jiale Lao, Yiyao Wang, Haoxuan Li, Tingting Gao, Bo Pan, Luoxuan Weng, Xiuqi Huang, Minfeng Zhu, Yingchaojie Feng, Yuyu Luo, Wei Chen"
  },
  {
    "title": "Iluvui: Instruction-tuned language-vision modeling of uis from machine conversations",
    "image": "figure/ILuvUI.PNG",
    "year": "2025",
    "keywords": "UI Understanding, VLM, Instruction Tuning, Multimodal, LLM, UI Navigation",
    "abstract": "Multimodal Vision-Language Models (VLMs) enable powerful applications from their fused understanding of images and language, but many perform poorly on UI tasks due to the lack of UI training data. In this paper, we adapt a recipe for generating paired text-image training data for VLMs to the UI domain by combining existing pixel-based methods with a Large Language Model (LLM). Unlike prior art, our method requires no human-provided annotations, and it can be applied to any dataset of UI screenshots. We generate a dataset of 353K conversational examples paired with UIs that cover Q&A, UI descriptions, and planning, and use it to fine-tune a conversational VLM for UI tasks. To assess the performance of our model, we benchmark it on UI element detection tasks, evaluate response quality, and showcase its applicability to UI verification.",
    "code_link": "",
    "doi": "https://dl.acm.org/doi/10.1145/3708359.3712129",
    "categories": [
      "Interaction Generation and Recommendation",
      "Agentic Visual Analytics"
    ],
    "authors": "Yue Jiang, Eldon Schoop, Amanda Swearngin, Jeffrey Nichols"
  },
  {
    "title": "InfoChartQA: A Benchmark for Multimodal Question Answering on Infographic Charts",
    "image": "figure/InfoChartQA.PNG",
    "year": "2025",
    "keywords": "InfoChartQA\nmultimodal question answering\ninfographic charts\nvisual-element-based questions\nmultimodal large language models",
    "abstract": "Understanding infographic charts with pictorial visual elements (e.g.,pictograms and icons)requires both visual recognition and reasoning,posing challenges for multimodal large language models (MLLMs).However,existing visual question answering benchmarks fall short in evaluating these capabilities of MLLMs due to the lack of paired plain charts and visual-element-based questions.To bridge this gap,we introduce InfoChartQA,a benchmark for evaluating MLLMs on infographic chart understanding.It includes 5,948pairs of infographic and plain charts,each sharing the same underlying data but differing in visual presentations.We further design visual-element-based questions to capture their unique visual designs and communicative intent.Evaluation of 20MLLMs reveals a substantial performance decline on infographic charts,particularly for visual-element-based questions related to metaphors.The paired infographic and plain charts enable finegrained error analysis and ablation studies,which highlight new opportunities for advancing MLLMs in infographic chart understanding.We release InfoChartQA at https://github.com/CoolDawnAnt/InfoChartQA.",
    "code_link": "https://github.com/CoolDawnAnt/InfoChartQA",
    "doi": "https://neurips.cc/virtual/2025/loc/san-diego/poster/121377",
    "authors": "Tianchi Xie, Minzhi Lin, Mengchen Liu, Yilin Ye, Changjian Chen, Shixia Liu",
    "categories": [
      "High-level Semantic Cognition"
    ]
  },
  {
    "title": "InfographicVQA",
    "image": "figure/InfographicVQA.PNG",
    "year": "2022",
    "keywords": "InfographicVQA\nVisual Question Answering\nMultimodal Transformer\nLayoutLM\nOCR\nVQA Baselines",
    "abstract": "Infographics communicate information using a combination of textual, graphical and visual elements. This work explores the automatic understanding of infographic images by using a Visual Question Answering technique. To this end, we present InfographicVQA, a new dataset comprising a diverse collection of infographics and question-answer annotations. The questions require methods that jointly reason over the document layout, textual content, graphical elements, and data visualizations. We curate the dataset with an emphasis on questions that require elementary reasoning and basic arithmetic skills. For VQA on the dataset, we evaluate two Transformer-based strong baselines. Both the baselines yield unsatisfactory results compared to near perfect human performance on the dataset. The results suggest that VQA on infographics—images that are designed to communicate information quickly and clearly to the human brain—is ideal for benchmarking machine understanding of complex document images. The dataset is available for download at docvqa.org",
    "code_link": "https://www.docvqa.org/datasets/infographicvqa",
    "doi": "https://ieeexplore.ieee.org/document/9706887",
    "authors": "Minesh Mathew, Viraj Bagal, Rubèn Tito, Dimosthenis Karatzas, Ernest Valveny, C.V. Jawahar",
    "categories": [
      "High-level Semantic Cognition"
    ]
  },
  {
    "title": "InkSight: Leveraging Sketch Interaction for Documenting Chart Findings in Computational Notebooks",
    "image": "figure/InkSight_Leveraging_Sketch_Interaction_for_Documenting_Chart_Findings_in_Computational_Notebooks.PNG",
    "year": "2023",
    "keywords": "Computational Notebook\nSketch-based Interaction\nDocumentation\nVisualization\nExploratory Data Analysis",
    "abstract": "Computational notebooks have become increasingly popular for exploratory data analysis due to their ability to support data exploration and explanation within a single document. Effective documentation for explaining chart findings during the exploration process is essential as it helps recall and share data analysis. However, documenting chart findings remains a challenge due to its time-consuming and tedious nature. While existing automatic methods alleviate some of the burden on users, they often fail to cater to users' specific interests. In response to these limitations, we present InkSight, a mixed-initiative computational notebook plugin that generates finding documentation based on the user's intent. InkSight allows users to express their intent in specific data subsets through sketching atop visualizations intuitively. To facilitate this, we designed two types of sketches, i.e., open-path and closed-path sketch. Upon receiving a user's sketch, InkSight identifies the sketch type and corresponding selected data items. Subsequently, it filters data fact types based on the sketch and selected data items before employing existing automatic data fact recommendation algorithms to infer data facts. Using large language models (GPT-3.5), InkSight converts data facts into effective natural language documentation. Users can conveniently fine-tune the generated documentation within InkSight. A user study with 12 participants demonstrated the usability and effectiveness of InkSight in expressing user intent and facilitating chart finding documentation.",
    "code_link": "",
    "doi": "https://ieeexplore.ieee.org/document/10296056",
    "authors": "Yanna Lin, Haotian Li, Leni Yang, Aoyu Wu, Huamin Qu",
    "categories": [
      "Multimodal Interaction Perception"
    ]
  },
  {
    "title": "InterChat: Enhancing Generative Visual Analytics using Multimodal Interactions",
    "image": "figure/InterChat.PNG",
    "year": "2025",
    "keywords": "Human-centered computing\nInteractive systems and tools\nVisual analytics\nNatural language processing",
    "abstract": "The rise of Large Language Models (LLMs) and generative visual analytics systems has transformed data-driven insights, yet significant challenges persist in accurately interpreting users' analytical and interaction intents. While language inputs offer flexibility, they often lack precision, making the expression of complex intents inefficient, error-prone, and time-intensive. To address these limitations, we investigate the design space of multimodal interactions for generative visual analytics through a literature review and pilot brainstorming sessions. Building on these insights, we introduce a highly extensible workflow that integrates multiple LLM agents for intent inference and visualization generation. We develop InterChat, a generative visual analytics system that combines direct manipulation of visual elements with natural language inputs. This integration enables precise intent communication and supports progressive, visually driven exploratory data analyses. By employing effective prompt engineering and contextual interaction linking, alongside intuitive visualization and interaction designs, InterChat bridges the gap between user interactions and LLM-driven visualizations, enhancing both interpretability and usability. Extensive evaluations, including two usage scenarios, a user study, and expert feedback, demonstrate the effectiveness of InterChat. Results show significant improvements in the accuracy and efficiency of handling complex visual analytics tasks, highlighting the potential of multimodal interactions to redefine user engagement and analytical depth in generative visual analytics.",
    "code_link": "",
    "doi": "https://arxiv.org/abs/2503.04110",
    "authors": "Juntong Chen, Jiang Wu, Jiajing Guo, Vikram Mohanty, Xueming Li, Jorge Piazentin Ono, Wenbin He, Liu Ren, Dongyu Liu",
    "categories": [
      "Conditional Visualization Synthesis",
      "Multimodal Interaction Perception",
      "Interaction Generation and Recommendation"
    ]
  },
  {
    "title": "Is GPT-4V (ision) All You Need for Automating Academic Data Visualization? Exploring Vision-Language Models’ Capability in Reproducing Academic Charts",
    "image": "figure/Is GPT-4V (ision) All You Need for Automating Academic Data Visualization_ Exploring Vision-Language Models’ Capability in Reproducing Academic Charts.PNG",
    "year": "2024",
    "keywords": "Vision-Language Models  \nAcademic Data Visualization  \nChart Reproduction  \nAutomated Data Visualization  \nVision-Language Models’ Capability",
    "abstract": "While effective data visualization is crucial to present complex information in academic research, its creation demands significant expertise in both data management and graphic design. We explore the potential of using Vision-Language Models (VLMs) in automating the creation of data visualizations by generating code templates from existing charts. As the first work to systematically investigate this task, we first introduce AcademiaChart, a dataset comprising 2525 high-resolution data visualization figures with captions from a variety of AI conferences, extracted directly from source codes. We then conduct large-scale experiments with six state-of-the-art (SOTA) VLMs, including both closed-source and open-source models. Our findings reveal that SOTA closed-source VLMs can indeed be helpful in reproducing charts. On the contrary, open-source ones are only effective at reproducing much simpler charts but struggle with more complex ones. Interestingly, the application of Chain-of-Thought (CoT) prompting significantly enhances the performance of the most advanced model, GPT-4-V, while it does not work as well for other models. These results underscore the potential of VLMs in data visualization while also highlighting critical areas that need improvement for broader application.",
    "code_link": "https://github.com/zzh-SJTU/AcademiaChart",
    "doi": "https://aclanthology.org/2024.findings-emnlp.485/",
    "authors": "Zhehao Zhang, Weicheng Ma, Soroush Vosoughi",
    "categories": [
      "Code-level Visualization Reconstruction"
    ]
  },
  {
    "title": "KG4Vis: A Knowledge Graph-Based Approach for Visualization Recommendation",
    "image": "figure/KG4Vis_ A Knowledge Graph-Based Approach for Visualization Recommendation.PNG",
    "year": "2021",
    "keywords": "Visualization Recommendation, Knowledge Graph, TransE, Explainability, Feature Engineering",
    "abstract": "Visualization recommendation or automatic visualization generation can significantly lower the barriers for general users to rapidly create effective data visualizations, especially for those users without a background in data visualizations. However, existing rule-based approaches require tedious manual specifications of visualization rules by visualization experts. Other machine learning-based approaches often work like black-box and are difficult to understand why a specific visualization is recommended, limiting the wider adoption of these approaches. This paper fills the gap by presenting KG4Vis, a knowledge graph (KG)-based approach for visualization recommendation. It does not require manual specifications of visualization rules and can also guarantee good explainability. Specifically, we propose a framework for building knowledge graphs, consisting of three types of entities (i.e., data features, data columns and visualization design choices) and the relations between them, to model the mapping rules between data and effective visualizations. A TransE-based embedding technique is employed to learn the embeddings of both entities and relations of the knowledge graph from existing dataset-visualization pairs. Such embeddings intrinsically model the desirable visualization rules. Then, given a new dataset, effective visualizations can be inferred from the knowledge graph with semantically meaningful rules. We conducted extensive evaluations to assess the proposed approach, including quantitative comparisons, case studies and expert interviews. The results demonstrate the effectiveness of our approach.",
    "code_link": "",
    "doi": "https://ieeexplore.ieee.org/document/9552844",
    "categories": [
      "Visualization Recommendation"
    ],
    "authors": "Haotian Li, Yong Wang, Songheng Zhang, Yangqiu Song, Huamin Qu"
  },
  {
    "title": "Knownet: Guided health information seeking from llms via knowledge graph integration",
    "image": "figure/Knownet_ Guided health information seeking from llms via knowledge graph integration.PNG",
    "year": "2024",
    "keywords": "Health Information, Knowledge Graph, LLM, Visualization, Information Seeking, Explainability",
    "abstract": "The increasing reliance on Large Language Models (LLMs) for health information seeking can pose severe risks due to the potential for misinformation and the complexity of these topics. This paper introduces KnowNet a visualization system that integrates LLMs with Knowledge Graphs (KG) to provide enhanced accuracy and structured exploration. Specifically, for enhanced accuracy, KnowNet extracts triples (e.g., entities and their relations) from LLM outputs and maps them into the validated information and supported evidence in external KGs. For structured exploration, KnowNet provides next-step recommendations based on the neighborhood of the currently explored entities in KGs, aiming to guide a comprehensive understanding without overlooking critical aspects. To enable reasoning with both the structured data in KGs and the unstructured outputs from LLMs, KnowNet conceptualizes the understanding of a subject as the gradual construction of graph visualization. A progressive graph visualization is introduced to monitor past inquiries, and bridge the current query with the exploration history and next-step recommendations. We demonstrate the effectiveness of our system via use cases and expert interviews.",
    "code_link": "",
    "doi": "https://ieeexplore.ieee.org/document/10670469",
    "categories": [
      "Interaction Generation and Recommendation",
      "Agentic Visual Analytics"
    ],
    "authors": "Youfu Yan, Yu Hou, Yongkang Xiao, Rui Zhang, Qianwen Wang"
  },
  {
    "title": "LEVA: Using Large Language Models to Enhance Visual Analytics",
    "image": "figure/LEVA_Using_Large_Language_Models_to_Enhance_Visual_Analytics.PNG",
    "year": "2024",
    "keywords": "Visualization onboarding\nInsight recommendation\nInterface agent\nLarge language models\nVisual analytics",
    "abstract": "Visual analytics supports data analysis tasks within complex domain problems. However, due to the richness of data types, visual designs, and interaction designs, users need to recall and process a significant amount of information when they visually analyze data. These challenges emphasize the need for more intelligent visual analytics methods. Large language models have demonstrated the ability to interpret various forms of textual data, offering the potential to facilitate intelligent support for visual analytics. We propose LEVA, a framework that uses large language models to enhance users' VA workflows at multiple stages: onboarding, exploration, and summarization. To support onboarding, we use large language models to interpret visualization designs and view relationships based on system specifications. For exploration, we use large language models to recommend insights based on the analysis of system status and data to facilitate mixed-initiative exploration. For summarization, we present a selective reporting strategy to retrace analysis history through a stream visualization and generate insight reports with the help of large language models. We demonstrate how LEVA can be integrated into existing visual analytics systems. Two usage scenarios and a user study suggest that LEVA effectively aids users in conducting visual analytics.",
    "code_link": "",
    "doi": "https://ieeexplore.ieee.org/document/10458347",
    "authors": "Yuheng Zhao, Yixing Zhang, Yu Zhang, Xinyi Zhao, Junjie Wang, Zekai Shao, Cagatay Turkay, Siming Chen",
    "categories": [
      "Interaction Generation and Recommendation",
      "Agentic Visual Analytics"
    ]
  },
  {
    "title": "LIDA:A Tool for Automatic Generation of Grammar-Agnostic Visualizations and Infographics using Large Language Models",
    "image": "figure/LIDA.PNG",
    "year": "2023",
    "keywords": "Large Language Models  \nVisualization Generation  \nGrammar-Agnostic  \nInfographics  \nNatural Language Processing  \nData Storytelling  \nInteractive Charts",
    "abstract": "Systems that support users in the automatic creation of visualizations must address several subtasks -understand the semantics of data,enumerate relevant visualization goals and generate visualization specifications.In this work,we pose visualization generation as a multi-stage generation problem and argue that well-orchestrated pipelines based on large language models (LLMs)and image generation models (IGMs)are suitable to addressing these tasks.We present LIDA,a novel tool for generating grammar-agnostic visualizations and infographics.LIDA comprises of 4modules -A SUMMARIZER that converts data into a rich but compact natural language summary,a GOAL EXPLORER that enumerates visualization goals given the data,a VISGENERATOR that generates,refines,executes and filters visualization code and an INFOGRAPHER module that yields data-faithful stylized graphics using IGMs.LIDA provides a python api,and a hybrid USER INTERFACE (direct manipulation and multilingual natural language)for interactive chart,infographics and data story generation.Code and demo are available at this url - https://microsoft.github.io/lida/",
    "code_link": "https://github.com/microsoft/l",
    "doi": "https://aclanthology.org/2023.acl-demo.11/",
    "authors": "Victor Dibia",
    "categories": [
      "Conditional Visualization Synthesis"
    ]
  },
  {
    "title": "LLM4Vis: Explainable Visualization Recommendation using ChatGPT",
    "image": "figure/LLM4Vis.PNG",
    "year": "2023",
    "keywords": "Data visualization\nVisualization recommendation\nChatGPT\nIn-context learning\nExplanation generation\nFeature description",
    "abstract": "Data visualization is a powerful tool for exploring and communicating insights in various domains. To automate visualization choice for datasets, a task known as visualization recommendation has been proposed. Various machine-learning-based approaches have been developed for this purpose, but they often require a large corpus of dataset-visualization pairs for training and lack natural explanations for their results. To address this research gap, we propose LLM4Vis, a novel ChatGPT-based prompting approach to perform visualization recommendation and return human-like explanations using very few demonstration examples. Our approach involves feature description, demonstration example selection, explanation generation, demonstration example construction, and inference steps. To obtain demonstration examples with high-quality explanations, we propose a new explanation generation bootstrapping to iteratively refine generated explanations by considering the previous generation and template-based hint. Evaluations on the VizML dataset show that LLM4Vis outperforms or performs similarly to supervised learning models like Random Forest, Decision Tree, and MLP, in both few-shot and zero-shot settings. The qualitative evaluation also shows the effectiveness of explanations generated by LLM4Vis.",
    "code_link": "https://github.com/demoleiwang/LLM4Vis ",
    "doi": "https://aclanthology.org/2023.emnlp-industry.64/",
    "authors": "Lei Wang, Songheng Zhang, Yun Wang, Ee-Peng Lim, Yong Wang",
    "categories": [
      "Visualization Recommendation"
    ]
  },
  {
    "title": "Learning to Recommend Visualizations from Data",
    "image": "figure/Learning to Recommend Visualizations from Data.PNG",
    "year": "2021",
    "keywords": "Visualization Recommendation, Deep Learning, Automated Visualization, KDD",
    "abstract": "Visualization recommendation is important for exploratory analysis and making sense of the data quickly by automatically recommending relevant visualizations to the user. In this work, we propose the first end-to-end ML-based visualization recommendation system that leverages a large corpus of datasets and their relevant visualizations to learn a visualization recommendation model automatically. Then, given a new unseen dataset from an arbitrary user, the model automatically generates visualizations for that new dataset, derives scores for the visualizations, and outputs a list of recommended visualizations to the user ordered by effectiveness. We also describe an evaluation framework to quantitatively evaluate visualization recommendation models learned from a large corpus of visualizations and datasets. Through quantitative experiments, a user study, and qualitative analysis, we show that our end-to-end ML-based system recommends more effective and useful visualizations compared to existing state-of-the-art rule-based systems.",
    "code_link": "",
    "doi": "https://dl.acm.org/doi/10.1145/3447548.3467224",
    "categories": [
      "Visualization Recommendation"
    ],
    "authors": "Xin Qian, Ryan A. Rossi, Fan Du, Sungchul Kim, Eunyee Koh, Sana Malik, Tak Yeon Lee, Joel Chan"
  },
  {
    "title": "Leveraging foundation models for crafting narrative visualization: A survey",
    "image": "figure/Leveraging foundation models for crafting narrative visualization_ A survey.PNG",
    "year": "2025",
    "keywords": "Narrative Visualization, Foundation Models, LLM, Survey, Data Storytelling",
    "abstract": "Narrative visualization transforms data into engaging stories, making complex information accessible to a broad audience. Foundation models, with their advanced capabilities such as natural language processing, content generation, and multimodal integration, hold substantial potential for enriching narrative visualization. Recently, a collection of techniques have been introduced for crafting narrative visualizations based on foundation models from different aspects. We build our survey upon 66 articles to study how foundation models can progressively engage in this process and then propose a reference model categorizing the reviewed literature into four essential phases: Analysis, Narration, Visualization, and Interaction. Furthermore, we identify eight specific tasks (e.g., Insight Extraction and Authoring) where foundation models are applied across these stages to facilitate the creation of visual narratives. Detailed descriptions, related literature, and reflections are presented for each task. To make it a more impactful and informative experience for diverse readers, we discuss key research problems and provide the strengths and weaknesses in each task to guide people in identifying and seizing opportunities while navigating challenges in this field.",
    "code_link": "",
    "doi": "https://ieeexplore.ieee.org/document/10891192",
    "categories": [
      "Multi-view and Narrative Visualization Composition"
    ],
    "authors": "Yi He, Ke Xu, Shixiong Cao, Yang Shi, Qing Chen, Nan Cao"
  },
  {
    "title": "Libra: An interaction model for data visualization",
    "image": "figure/Libra_ An interaction model for data visualization.PNG",
    "year": "2025",
    "keywords": "Data Visualization, Interaction Model, Modularity, Reusable Interactions, D3, Vega",
    "abstract": "While existing visualization libraries enable the reuse, extension, and combination of static visualizations, achieving the same for interactions remains nearly impossible. Therefore, we contribute an interaction model and its implementation to achieve this goal. Our model enables the creation of interactions that support direct manipulation, enforce software modularity by clearly separating visualizations from interactions, and ensure compatibility with existing visualization systems. Interaction management is achieved through an instrument that receives events from the view, dispatches these events to graphical layers containing objects, and then triggers actions. We present a JavaScript prototype implementation of our model called Libra.js, enabling the specification of interactions for visualizations created by different libraries. We demonstrate the effectiveness of Libra by describing and generating a wide range of existing interaction techniques. We evaluate Libra.js through diverse examples, a metric-based notation comparison, and a performance benchmark analysis.",
    "code_link": "",
    "doi": "https://dl.acm.org/doi/10.1145/3706598.3713769",
    "categories": [
      "Interaction Generation and Recommendation"
    ],
    "authors": "Yue Zhao, Yunhai Wang, Xu Luo, Yanyan Wang, Jean-Daniel Fekete"
  },
  {
    "title": "Lightva: Lightweight visual analytics with llm agent-based task planning and execution",
    "image": "figure/Lightva_ Lightweight visual analytics with llm agent-based task planning and execution.PNG",
    "year": "2024",
    "keywords": "Visual Analytics, LLM Agent, Task Planning, Human-AI Collaboration, Interactive Visualization",
    "abstract": "Visual analytics (VA) requires analysts to iteratively propose analysis tasks based on observations and execute tasks by creating visualizations and interactive exploration to gain insights. This process demands skills in programming, data processing, and visualization tools, highlighting the need for a more intelligent, streamlined VA approach. Large language models (LLMs) have recently been developed as agents to handle various tasks with dynamic planning and tool-using capabilities, offering the potential to enhance the efficiency and versatility of VA. We propose LightVA, a lightweight VA framework that supports task decomposition, data analysis, and interactive exploration through human-agent collaboration. Our method is designed to help users progressively translate high-level analytical goals into low-level tasks, producing visualizations and deriving insights. Specifically, we introduce an LLM agent-based task planning and execution strategy, employing a recursive process involving a planner, executor, and controller. The planner is responsible for recommending and decomposing tasks, the executor handles task execution, including data analysis, visualization generation and multi-view composition, and the controller coordinates the interaction between the planner and executor. Building on the framework, we develop a system with a hybrid user interface that includes a task flow diagram for monitoring and managing the task planning process, a visualization panel for interactive data exploration, and a chat view for guiding the model through natural language instructions. We examine the effectiveness of our method through a usage scenario and an expert study.",
    "code_link": "",
    "doi": "https://ieeexplore.ieee.org/document/10753451",
    "categories": [
      "Interaction Generation and Recommendation",
      "Agentic Visual Analytics"
    ],
    "authors": "Yuheng Zhao, Junjie Wang, Linbin Xiang, Xiaowen Zhang, Zifei Guo, Cagatay Turkay, Yu Zhang, Siming Chen"
  },
  {
    "title": "MATCHA: Enhancing Visual Language Pretraining with Math Reasoning and Chart Derendering",
    "image": "figure/MATCHA.PNG",
    "year": "2023",
    "keywords": "Visual language\nChart understanding\nMath reasoning\nImage-to-text transformer\nChart derendering\nPretraining tasks\nChart-to-text summarization",
    "abstract": "Visual language data such as plots,charts,and infographics are ubiquitous in the human world.However,state-of-the-art visionlanguage models do not perform well on these data.We propose MATCHA (Math reasoning and Chart derendering pretraining)to enhance visual language models'capabilities in jointly modeling charts/plots and language data.Specifically we propose several pretraining tasks that cover plot deconstruction and numerical reasoning which are the key capabilities in visual language modeling.We perform the MATCHA pretraining starting from Pix2Struct,a recently proposed imageto-text visual language model.On standard benchmarks such as PlotQA and ChartQA,the MATCHA model outperforms state-of-the-art methods by as much as nearly 20%.We also examine how well the MATCHA pretraining transfers to domains such as screenshots,textbook diagrams,and document figures and observe overall improvement,verifying the usefulness of MATCHA pretraining on broader visual language tasks.",
    "code_link": "https://github.com/google-research/google-research/tree/master/deplot",
    "doi": "https://aclanthology.org/2023.acl-long.714/",
    "authors": "Fangyu Liu, Francesco Piccinno, Syrine Krichene, Chenxi Pang, Kenton Lee, Mandar Joshi, Yasemin Altun, Nigel Collier, Julian Martin Eisenschlos",
    "categories": [
      "Low-level Information Perception",
      "High-level Semantic Cognition",
      "Code-level Visualization Reconstruction"
    ]
  },
  {
    "title": "METAL: A Multi-Agent Framework for Chart Generation with Test-Time Scaling",
    "image": "figure/METAL.PNG",
    "year": "2025",
    "keywords": "Chart Generation  \nVision-Language Models  \nMulti-Agent Framework  \nTest-Time Scaling  \nChart-to-Code",
    "abstract": "Chart generation aims to generate code to produce charts satisfying the desired visual properties, e.g., texts, layout, color, and type. It has great potential to empower the automatic professional report generation in financial analysis, research presentation, education, and healthcare. In this work, we build a vision-language model (VLM) based multi-agent framework for effective automatic chart generation. Generating high-quality charts requires both strong visual design skills and precise coding capabilities that embed the desired visual properties into code. Such a complex multi-modal reasoning process is difficult for direct prompting of VLMs. To resolve these challenges, we propose METAL, a multi-agent framework that decomposes the task of chart generation into the iterative collaboration among specialized agents. METAL achieves a 5.2% improvement in the F1 score over the current best result in the chart generation task. Additionally, METAL improves chart generation performance by 11.33% over Direct Prompting with LLaMA-3.2-11B.Furthermore, the METAL framework exhibits the phenomenon of test-time scaling: its performance increases monotonically as the logarithm of computational budget grows from 512 to 8192 tokens.",
    "code_link": "https://github.com/metal-chart-generation/metal",
    "doi": "https://aclanthology.org/2025.acl-long.1452/",
    "authors": "Bingxuan Li, Yiwei Wang, Jiuxiang Gu, Kai-Wei Chang, Nanyun Peng",
    "categories": [
      "Code-level Visualization Reconstruction"
    ]
  },
  {
    "title": "MMC: Advancing Multimodal Chart Understanding with Large-scale Instruction Tuning",
    "image": "figure/MMC.PNG",
    "year": "2024",
    "keywords": "Multimodal Chart Understanding  \nLarge-scale Instruction Tuning  \nChart Image Understanding  \nMultimodal Models  \nChart QA Benchmarks  \nHuman-annotated Benchmark",
    "abstract": "With the rapid development of large language models (LLMs) and their integration into large multimodal models (LMMs), there has been impressive progress in zero-shot completion of user-oriented vision-language tasks. However, a gap remains in the domain of chart image understanding due to the distinct abstract components in charts. To address this, we introduce a large-scale MultiModal Chart Instruction (MMC-Instruction) dataset comprising 600k instances supporting diverse tasks and chart types. Leveraging this data, we develop MultiModal Chart Assistant (MMCA), an LMM that achieves state-of-the-art performance on existing chart QA benchmarks. Recognizing the need for a comprehensive evaluation of LMM chart understanding, we also propose a MultiModal Chart Benchmark (MMC-Benchmark), a comprehensive human-annotated benchmark with nine distinct tasks evaluating reasoning capabilities over charts. Extensive experiments on MMC-Benchmark reveal the limitations of existing LMMs on correctly interpreting charts, even for the most recent GPT-4V model. Our work provides an instruction-tuning methodology and benchmark to advance multimodal understanding of charts. Code and data are available at https://github.com/FuxiaoLiu/MMC",
    "code_link": "https://github.com/FuxiaoLiu/MMC",
    "doi": "https://aclanthology.org/2024.naacl-long.70/",
    "authors": "Fuxiao Liu, Xiaoyang Wang, Wenlin Yao, Jianshu Chen, Kaiqiang Song, Sangwoo Cho, Yaser Yacoob, Dong Yu",
    "categories": [
      "Low-level Information Perception",
      "High-level Semantic Cognition"
    ]
  },
  {
    "title": "MapIO: A Gestural and Conversational Interface for Tactile Maps",
    "image": "figure/MapIO_A_Gestural_and_Conversational_Interface_for_Tactile_Maps.PNG",
    "year": "2025",
    "keywords": "Assistive technologies\nBlind and low vision people\nConversational interface\nDigitally augmented tactile maps\nTactile maps\nLarge Language Models\nGestural interaction\nSpatial reasoning\nNavigation\nPoint inspection\nAccessibility\nEmbodied interaction\nAudio feedback\nPrompt engineering\nTool calls\nUsability\nHuman-computer interaction",
    "abstract": "For individuals who are blind or have low vision, tactile maps provide essential spatial information but are limited in the amount of data they can convey. Digitally augmented tactile maps enhance these capabilities with audio feedback, thereby combining the tactile feedback provided by the map with an audio description of the touched elements. In this context, we explore an embodied interaction paradigm to augment tactile maps with conversational interaction based on Large Language Models, thus enabling users to obtain answers to arbitrary questions regarding the map. We analyze the types of questions the users are interested in asking, engineer the Large Language Model's prompt to provide reliable answers, and study the resulting system with a set of 10 participants, evaluating how the users interact with the system, its usability, and user satisfaction.",
    "code_link": "",
    "doi": "https://ieeexplore.ieee.org/document/10981719",
    "authors": "Matteo Manzoni, Sergio Mascetti, Dragan Ahmetovic, Ryan Crabb, James M. Coughlan",
    "categories": [
      "Multimodal Interaction Perception"
    ]
  },
  {
    "title": "MatPlotAgent: Method and Evaluation for LLM-Based Agentic Scientific Data Visualization",
    "image": "figure/MatPlotAgent.PNG",
    "year": "2024",
    "keywords": "Scientific data visualization\nLarge Language Models (LLMs)\nMatPlotAgent\nQuery understanding\nCode generation\nIterative debugging\nVisual feedback mechanism\nMatPlotBench\nAutomatic evaluation",
    "abstract": "Scientific data visualization plays a crucial role in research by enabling the direct display of complex information and assisting researchers in identifying implicit patterns. Despite its importance, the use of Large Language Models (LLMs) for scientific data visualization remains rather unexplored. In this study, we introduce MatPlotAgent, an efficient model-agnostic LLM agent framework designed to automate scientific data visualization tasks. Leveraging the capabilities of both code LLMs and multi-modal LLMs, MatPlotAgent consists of three core modules: query understanding, code generation with iterative debugging, and a visual feedback mechanism for error correction. To address the lack of benchmarks in this field, we present MatPlotBench, a high-quality benchmark consisting of 100 human-verified test cases. Additionally, we introduce a scoring approach that utilizes GPT-4V for automatic evaluation. Experimental results demonstrate that MatPlotAgent can improve the performance of various LLMs, including both commercial and open-source models. Furthermore, the proposed evaluation method shows a strong correlation with human-annotated scores.",
    "code_link": "https://github.com/thunlp/MatPlotAgent",
    "doi": "https://aclanthology.org/2024.findings-acl.701/",
    "authors": "Zhiyu Yang, Zihan Zhou, Shuo Wang, Xin Cong, Xu Han, Yukun Yan, Zhenghao Liu, Zhixing Tan, Pengyuan Liu, Dong Yu, Zhiyuan Liu, Xiaodong Shi, Maosong Sun",
    "categories": [
      "Conditional Visualization Synthesis"
    ]
  },
  {
    "title": "MisVisFix: An Interactive Dashboard for Detecting, Explaining, and Correcting Misleading Visualizations using Large Language Models",
    "year": "2025",
    "keywords": "Misleading Visualizations  \nDetection  \nCorrection  \nLarge Language Models  \nMultimodal  \nInteractive System",
    "abstract": "Misleading visualizations pose a significant challenge to accurate data interpretation. While recent research has explored the use of Large Language Models (LLMs) for detecting such misinformation, practical tools that also support explanation and correction remain limited. We present MisVisFix, an interactive dashboard that leverages both Claude and GPT models to support the full workflow of detecting, explaining, and correcting misleading visualizations. MisVisFix correctly identifies 96% of visualization issues and addresses all 74 known visualization misinformation types, classifying them as major, minor, or potential concerns. It provides detailed explanations, actionable suggestions, and automatically generates corrected charts. An interactive chat interface allows users to ask about specific chart elements or request modifications. The dashboard adapts to newly emerging misinformation strategies through targeted user interactions. User studies with visualization experts and developers of fact-checking tools show that MisVisFix accurately identifies issues and offers useful suggestions for improvement. By transforming LLM-based detection into an accessible, interactive platform, MisVisFix advances visualization literacy and supports more trustworthy data communication.",
    "code_link": "https://github.com/vhcailab/MisVisFix",
    "doi": "https://pubmed.ncbi.nlm.nih.gov/41296968/",
    "authors": "Amit Kumar Das, Klaus Mueller",
    "categories": [
      "Conditional Visualization Synthesis"
    ],
    "image": "figure/MisVisFix An Interactive Dashboard for Detecting, Explaining, and Correcting Misleading Visualizations using Large Language Models.png"
  },
  {
    "title": "Multimodal deepresearcher: Generating text-chart interleaved reports from scratch with agentic framework",
    "year": "2026",
    "keywords": "Multimodal, Deep Research, Text-Chart, Agentic Framework, FDV, Report Generation",
    "abstract": "Visualizations play a crucial part in effective communication of concepts and information. Recent advances in reasoning and retrieval augmented generation have enabled Large Language Models (LLMs) to perform deep research and generate comprehensive reports. Despite its progress, existing deep research frameworks primarily focus on generating text-only content, leaving the automated generation of interleaved texts and visualizations underexplored. This novel task poses key challenges in designing informative visualizations and effectively integrating them with text reports. To address these challenges, we propose Formal Description of Visualization (FDV), a structured textual representation of charts that enables LLMs to learn from and generate diverse, high-quality visualizations. Building on this representation, we introduce Multimodal DeepResearcher, an agentic framework that decomposes the task into four stages: (1) researching, (2) exemplar report textualization, (3) planning and (4) multimodal report generation. For the evaluation of the generated reports, we develop MultimodalReportBench which contains 100 diverse topics as inputs, and a set of dedicated metrics for report and chart evaluation. Extensive experiments across models and evaluation methods demonstrate the effectiveness of Multimodal DeepResearcher. Notably, utilizing the same Claude 3.7 Sonnet model, Multimodal DeepResearcher achieves an 82% overall win rate over the baseline method.",
    "code_link": "",
    "doi": "https://ojs.aaai.org/index.php/AAAI/article/view/40734?",
    "categories": [
      "Multi-view and Narrative Visualization Composition",
      "High-level Semantic Cognition"
    ],
    "authors": "Zhaorui Yang, Bo Pan, Han Wang, Yiyao Wang, Xingyu Liu, Luoxuan Weng, Yingchaojie Feng, Haozhe Feng, Minfeng Zhu, Bo Zhang, Wei Chen",
    "image": "figure/Multimodal deepresearcher Generating text-chart interleaved reports from scratch with agentic framework.png"
  },
  {
    "title": "NL2Color: Refining Color Palettes for Charts with Natural Language",
    "year": "2023",
    "keywords": "chart\ncolor palette\nnatural language\nlarge language model",
    "abstract": "Choice of color is critical to creating effective charts with an engaging, enjoyable, and informative reading experience. However, designing a good color palette for a chart is a challenging task for novice users who lack related design expertise. For example, they often find it difficult to articulate their abstract intentions and translate these intentions into effective editing actions to achieve a desired outcome. In this work, we present NL2Color, a tool that allows novice users to refine chart color palettes using natural language expressions of their desired outcomes. We first collected and categorized a dataset of 131 triplets, each consisting of an original color palette of a chart, an editing intent, and a new color palette designed by human experts according to the intent. Our tool employs a large language model (LLM) to substitute the colors in original palettes and produce new color palettes by selecting some of the triplets as few-shot prompts. To evaluate our tool, we conducted a comprehensive two-stage evaluation, including a crowd-sourcing study (N=71) and a within-subjects user study (N=12). The results indicate that the quality of the color palettes revised by NL2Color has no significantly large difference from those designed by human experts. The participants who used NL2Color obtained revised color palettes to their satisfaction in a shorter period and with less effort.",
    "code_link": "",
    "doi": "https://pubmed.ncbi.nlm.nih.gov/37871067/",
    "authors": "Chuhan Shi, Weiwei Cui, Chengzhong Liu, Chengbo Zheng, Haidong Zhang, Qiong Luo, Xiaojuan Ma",
    "categories": [
      "Conditional Visualization Synthesis"
    ],
    "image": "figure/NL2Color Refining Color Palettes for Charts with Natural Language.png"
  },
  {
    "title": "NL2Dashboard: A Lightweight and Controllable Framework for Generating Dashboards with LLMs",
    "year": "2026",
    "keywords": "Large Language Models  \nDashboard Generation  \nAnalysis-Presentation Decoupling  \nStructured Intermediate Representation  \nToken Efficiency  \nFine-grained Controllability",
    "abstract": "While Large Language Models (LLMs) have demonstrated remarkable proficiency in generating standalone charts, synthesizing comprehensive dashboards remains a formidable challenge. Existing end-to-end paradigms, which typically treat dashboard generation as a direct code generation task (e.g., raw HTML), suffer from two fundamental limitations: representation redundancy due to massive tokens spent on visual rendering, and low controllability caused by the entanglement of analytical reasoning and presentation. To address these challenges, we propose NL2Dashboard, a lightweight framework grounded in the principle of Analysis-Presentation Decoupling. We introduce a structured intermediate representation (IR) that encapsulates the dashboard's content, layout, and visual elements. Therefore, it confines the LLM's role to data analysis and intent translation, while offloading visual synthesis to a deterministic rendering engine. Building upon this framework, we develop a multiagent system in which the IR-driven algorithm is instantiated as a suite of tools. Comprehensive experiments conducted with this system demonstrate that NL2Dashboard significantly outperforms state-of-the-art baselines across diverse domains, achieving superior visual quality, significantly higher token efficiency, and precise controllability in both generation and modification tasks.",
    "code_link": "",
    "doi": "https://arxiv.org/abs/2601.06126?",
    "authors": "Boshen Shi, Kexin Yang, Yuanbo Yang, Guanguang Chang, Ce Chi, Zhendong Wang, Xing Wang, Junlan Feng",
    "categories": [
      "Multi-view and Narrative Visualization Composition"
    ],
    "image": "figure/NL2Dashboard A Lightweight and Controllable Framework for Generating Dashboards with LLMs.png"
  },
  {
    "title": "NVAGENT: Automated Data Visualization from Natural Language via Collaborative Agent Workflow",
    "year": "2025",
    "keywords": "Natural Language to Visualization\nLarge Language Models\nCollaborative Agent Workflow\nData Visualization\nTabular Data\nVisualization Query Language",
    "abstract": "*Natural Language to Visualization* (NL2Vis) seeks to convert natural-language descriptions into visual representations of given tables, empowering users to derive insights from large-scale data. Recent advancements in *Large Language Models* (LLMs) show promise in automating code generation to transform tabular data into accessible visualizations. However, they often struggle with complex queries that require reasoning across multiple tables. To address this limitation, we propose a collaborative agent workflow, termed **nvAgent**, for NL2Vis. Specifically, **nvAgent** comprises three agents: a processor agent for database processing and context filtering, a composer agent for planning visualization generation, and a validator agent for code translation and output verification. Comprehensive evaluations on the new VisEval benchmark demonstrate that **nvAgent** consistently surpasses state-of-the-art baselines, achieving a 7.88% improvement in single-table and a 9.23% improvement in multi-table scenarios. Qualitative analyses further highlight that **nvAgent** maintains nearly a 20% performance margin over previous models, underscoring its capacity to produce high-quality visual representations from complex, heterogeneous data sources. All datasets and source code are available at: [https://github.com/geliang0114/nvAgent](https://github.com/geliang0114/nvAgent).",
    "code_link": "https://github.com/geliang0114/nvAgent",
    "doi": "https://aclanthology.org/2025.acl-long.960/?",
    "authors": "Geliang Ouyang, Jingyao Chen, Zhihe Nie, Yi Gui, Yao Wan, Hongyu Zhang, Dongping Chen",
    "categories": [
      "Conditional Visualization Synthesis"
    ],
    "image": "figure/NVAGENT Automated Data Visualization from Natural Language via Collaborative Agent Workflow.png"
  },
  {
    "title": "Natural Language Dataset Generation Framework for Visualizations Powered by Large Language Models",
    "year": "2024",
    "keywords": "Human-centered computing\nVisualization\nNatural language\nVega-Lite\nNatural language datasets\nLarge language models\nFramework\nNatural language interfaces\nData visualization",
    "abstract": "We introduce VL2NL,a Large Language Model (LLM)framework that generates rich and diverse NL datasets using Vega-Lite specifications as input,thereby streamlining the development of Natural Language Interfaces (NLIs)for data visualization.To synthesize relevant chart semantics accurately and enhance syntactic diversity in each NL dataset,we leverage 1)a guided discovery incorporated into prompting so that LLMs can steer themselves to create faithful NL datasets in a self-directed manner;2)a score-based paraphrasing to augment NL syntax along with four language axes.We also present a new collection of 1,981real-world Vega-Lite specifications that have increased diversity and complexity than existing chart collections.When tested on our chart collection,VL2NL extracted chart semantics and generated L1/L2captions with 89.4%and 76.0%accuracy,respectively.It also demonstrated generating and paraphrasing utterances and questions with greater diversity compared to the benchmarks.Last,we discuss how our NL datasets and framework can be utilized in real-world scenarios.The codes and chart collection are available at https://github.com/hyungkwonko/chart-llm.",
    "code_link": "https://github.com/hyungkwonko/chart-llm\n数据集：https://hyungkwonko.info/chart-llm-data/",
    "doi": "https://dl.acm.org/doi/10.1145/3613904.3642943",
    "authors": "Hyung-Kwon Ko, Hyeon Jeon, Gwanmo Park, Dae Hyun Kim, Nam Wook Kim, Juho Kim, Jinwook Seo",
    "categories": [
      "High-level Semantic Cognition",
      "Conditional Visualization Synthesis"
    ],
    "image": "figure/Natural Language Dataset Generation Framework for Visualizations Powered by Large Language Models.png"
  },
  {
    "title": "Natural Language to Visualization by Neural Machine Translation",
    "year": "2021",
    "keywords": "Natural language interface  \nData visualization  \nNeural machine translation  \nChart template",
    "abstract": "Supporting the translation from natural language (NL) query to visualization (NL2VIS) can simplify the creation of data visualizations because if successful, anyone can generate visualizations by their natural language from the tabular data. The state-of-the-art NL2VIS approaches (e.g., NL4DV and FlowSense) are based on semantic parsers and heuristic algorithms, which are not end-to-end and are not designed for supporting (possibly) complex data transformations. Deep neural network powered neural machine translation models have made great strides in many machine translation tasks, which suggests that they might be viable for NL2VIS as well. In this paper, we present ncNet, a Transformer-based sequence-to-sequence model for supporting NL2VIS, with several novel visualization-aware optimizations, including using attention-forcing to optimize the learning process, and visualization-aware rendering to produce better visualization results. To enhance the capability of machine to comprehend natural language queries, ncNet is also designed to take an optional chart template (e.g., a pie chart or a scatter plot) as an additional input, where the chart template will be served as a constraint to limit what could be visualized. We conducted both quantitative evaluation and user study, showing that ncNet achieves good accuracy in the nvBench benchmark and is easy-to-use.",
    "code_link": "https://github.com/HKUSTDial/ncNet\nhttps://github.com/HKUSTDial/Vega-Zero",
    "doi": "https://ieeexplore.ieee.org/document/9617561",
    "authors": "Yuyu Luo, Nan Tang, Guoliang Li, Jiawei Tang, Chengliang Chai, Xuedi Qin",
    "categories": [
      "Conditional Visualization Synthesis"
    ],
    "image": "figure/Natural Language to Visualization by Neural Machine Translation.png"
  },
  {
    "title": "Notable: On-the-fly assistant for data storytelling in computational notebooks",
    "year": "2023",
    "keywords": "Data Storytelling, Computational Notebooks, Interactive Assistant, Data Exploration, CHI",
    "abstract": "Computational notebooks are widely used for data analysis. Their interleaved displays of code and execution results (e.g., visualizations) are welcomed since they enable iterative analysis and preserve the exploration process. However, the communication of data findings remains challenging in computational notebooks. Users have to carefully identify useful findings from useless ones, document them with texts and visual embellishments, and then organize them in different tools. Such workflow greatly increases their workload. To address the challenge, we designed Notable to offer on-the-fly assistance for data storytelling in computational notebooks. It provides intelligent support to minimize the work of documenting and organizing data findings and diminishes the cost of switching between data exploration and storytelling. To evaluate Notable, we conducted a user study with 12 data workers. The feedback from user study participants verifies its effectiveness and usability.",
    "code_link": "",
    "doi": "https://dl.acm.org/doi/10.1145/3544548.3580965",
    "categories": [
      "Multi-view and Narrative Visualization Composition"
    ],
    "authors": "Haotian Li, Lu Ying, Haidong Zhang, Yingcai Wu, Huamin Qu, Yun Wang",
    "image": "figure/Notable On-the-fly assistant for data storytelling in computational notebooks.png"
  },
  {
    "title": "On Pre-training of Multimodal Language Models Customized for Chart Understanding",
    "year": "2024",
    "keywords": "Multimodal Language Models  \nChart Understanding  \nPre-training  \nFine-tuning  \nData Generation  \nBenchmark",
    "abstract": "Recent studies customizing Multimodal Large Language Models (MLLMs)for domain-specific tasks have yielded promising results,especially in the field of scientific chart comprehension.These studies generally utilize visual instruction tuning with specialized datasets to enhance question and answer (QA)accuracy within the chart domain.However,they often neglect the fundamental discrepancy between natural image-caption pre-training data and digital chart image-QA data,particularly in the models'capacity to extract underlying numeric values from charts.This paper tackles this oversight by exploring the training processes necessary to improve MLLMs'comprehension of charts.We present three key findings:(1)Incorporating raw data values in alignment pre-training markedly improves comprehension of chart data.(2)Replacing images with their textual representation randomly,during end-to-end fine-tuning,transfers the language reasoning to chart interpretation skills.(3)Requiring the model to first extract the underlying chart data and then answer the question in the fine-tuning can further improve the accuracy.Consequently,we introduce CHOPINLLM,an MLLM tailored for in-depth chart comprehension.CHOPINLLM effectively interprets various types of charts,including unannotated ones,while maintaining robust reasoning abilities.Furthermore,we establish a new benchmark to evaluate MLLMs'understanding of different chart types across various comprehension levels.Experimental results show that CHOPINLLM exhibits strong performance in understanding both annotated and unannotated charts across a wide range of types.",
    "code_link": "",
    "doi": "https://arxiv.org/abs/2407.14506",
    "authors": "Wan-Cyuan Fan, Yen-Chun Chen, Mengchen Liu, Lu Yuan, Leonid Sigal",
    "categories": [
      "Low-level Information Perception",
      "High-level Semantic Cognition"
    ],
    "image": "figure/On Pre-training of Multimodal Language Models Customized for Chart Understanding.png"
  },
  {
    "title": "OneChart: Purify the Chart Structural Extraction via One Auxiliary Token",
    "year": "2024",
    "keywords": "Chart structural extraction  \nVision-language model  \nMulti-modal large language models",
    "abstract": "Chart parsing poses a significant challenge due to the diversity of styles, values, texts, and so forth. Even advanced large vision-language models (LVLMs) with billions of parameters struggle to handle such tasks satisfactorily. To address this, we propose OneChart: a reliable agent specifically devised for the structural extraction of chart information. Similar to popular LVLMs, OneChart incorporates an autoregressive main body. Uniquely, to enhance the reliability of the numerical parts of the output, we introduce an auxiliary token placed at the beginning of the total tokens along with an additional decoder. The numerically optimized (auxiliary) token allows subsequent tokens for chart parsing to capture enhanced numerical features through causal attention. Furthermore, with the aid of the auxiliary token, we have devised a self-evaluation mechanism that enables the model to gauge the reliability of its chart parsing results by providing confidence scores for the generated content. Compared to current state-of-the-art (SOTA) chart parsing models, e.g., DePlot, ChartVLM, ChartAst, OneChart significantly outperforms in Average Precision (AP) for chart structural extraction across multiple public benchmarks, despite enjoying only 0.2 billion parameters. Moreover, as a chart parsing agent, it also brings 10%+ accuracy gains for the popular LVLM (LLaVA-1.6) in the downstream ChartQA benchmark.",
    "code_link": "https://onechartt.github.io/",
    "doi": "https://arxiv.org/abs/2404.09987",
    "authors": "Jinyue Chen, Lingyu Kong, Haoran Wei, Chenglong Liu, Zheng Ge, Liang Zhao, Jianjian Sun, Chunrui Han, Xiangyu Zhang",
    "categories": [
      "Low-level Information Perception"
    ],
    "image": "figure/OneChart Purify the Chart Structural Extraction via One Auxiliary Token.png"
  },
  {
    "title": "Personalized Visualization Recommendation",
    "year": "2022",
    "keywords": "Personalized Recommendation, User Modeling, Visualization, Collaborative Filtering",
    "abstract": "Visualization recommendation work has focused solely on scoring visualizations based on the underlying dataset, and not the actual user and their past visualization feedback. These systems recommend the same visualizations for every user, despite that the underlying user interests, intent, and visualization preferences are likely to be fundamentally different, yet vitally important. In this work, we formally introduce the problem of personalized visualization recommendation and present a generic learning framework for solving it. In particular, we focus on recommending visualizations personalized for each individual user based on their past visualization interactions (e.g., viewed, clicked, manually created) along with the data from those visualizations. More importantly, the framework can learn from visualizations relevant to other users, even if the visualizations are generated from completely different datasets. Experiments demonstrate the effectiveness of the approach as it leads to higher quality visualization recommendations tailored to the specific user intent and preferences. To support research on this new problem, we release our user-centric visualization corpus consisting of 17.4k users exploring 94k datasets with 2.3 million attributes and 32k user-generated visualizations.",
    "code_link": "",
    "doi": "https://dl.acm.org/doi/10.1145/3538703",
    "categories": [
      "Visualization Recommendation"
    ],
    "authors": "Xin Qian, Ryan A. Rossi, Fan Du, Sungchul Kim, Eunyee Koh, Sana Malik, Tak Yeon Lee, Nesreen K. Ahmed",
    "image": "figure/Personalized Visualization Recommendation.png"
  },
  {
    "title": "Plot2Code: A Comprehensive Benchmark for Evaluating Multi-modal Large Language Models in Code Generation from Scientific Plots",
    "year": "2025",
    "keywords": "Plot2Code  \nMulti-modal Large Language Models  \nCode Generation  \nScientific Plots  \nBenchmark  \nEvaluation Metrics  \nGPT-4  \nVisual Coding",
    "abstract": "Multi-modal Large Language Models have shown remarkable progress in visual contexts,yet their ability to convert visual figures into executable code remains underexplored.To address this,we introduce Plot2Code,a comprehensive benchmark designed to assess MLLMs'visual coding capabilities.Plot2Code includes 132high-quality matplotlib plots across six plot types,as well as an additional 150and 86plots from Python's and R's plotly libraries respectively,totaling 368plots.Each plot is paired with its source code and a descriptive instruction generated by GPT-4,enabling thorough evaluation across diverse inputs.Furthermore,we propose three automatic evaluation metrics—code pass rate,text-match ratio,and GPT-4V rating judgement—to assess the quality of generated code and rendered images.Notably,the GPT-4V rating demonstrates strong reliability,as it correlates well with human evaluations,particularly for datasets of a certain size.Crossvalidation across MLLMs (GPT-4V,Gemini-1.5-Pro,and Claude-3-Opus)also shows high consistency in ratings,which likely stems from the fact that ratings are based on rendered images rather than direct MLLM outputs,indicating minimal bias for this metric.Our evaluation of 14MLLMs,including both proprietary,and open-source models,highlights significant challenges in visual coding,particularly for textdense plots,where MLLMs heavily rely on textual instructions.We believe these findings will advance future development of MLLMs.",
    "code_link": "https://github.com/TencentARC/Plot2Code",
    "doi": "https://aclanthology.org/2025.findings-naacl.164/",
    "authors": "Chengyue Wu, Zhixuan Liang, Yixiao Ge, Qiushan Guo, Zeyu Lu, Jiahao Wang, Ying Shan, Ping Luo",
    "categories": [
      "Code-level Visualization Reconstruction"
    ],
    "image": "figure/Plot2Code A Comprehensive Benchmark for Evaluating Multi-modal Large Language Models in Code Generation from Scientific Plots.png"
  },
  {
    "title": "PlotQA: Reasoning over Scientific Plots",
    "year": "2020",
    "keywords": "PlotQA\nScientific Plots\nReasoning\nVisual Question Answering\nHybrid Model",
    "abstract": "Existing synthetic datasets (FigureQA,DVQA)for reasoning over plots do not contain variability in data labels,real-valued data,or complex reasoning questions.Consequently,proposed models for these datasets do not fully address the challenge of reasoning over plots.In particular,they assume that the answer comes either from a small fixed size vocabulary or from a bounding box within the image.However,in practice,this is an unrealistic assumption because many questions require reasoning and thus have real-valued answers which appear neither in a small fixed size vocabulary nor in the image.In this work,we aim to bridge this gap between existing datasets and real-world plots.Specifically,we propose PlotQA with 28.9million question-answer pairs over 224,377plots on data from realworld sources and questions based on crowd-sourced question templates.Further,80.76%of the out-of-vocabulary (OOV)questions in PlotQA have answers that are not in a fixed vocabulary.Analysis of existing models on PlotQA reveals that they cannot deal with OOV questions:their overall accuracy on our dataset is in single digits.This is not surprising given that these models were not designed for such questions.As a step towards a more holistic model which can address fixed vocabulary as well as OOV questions,we propose a hybrid approach:Specific questions are answered by choosing the answer from a fixed vocabulary or by extracting it from a predicted bounding box in the plot,while other questions are answered with a table questionanswering engine which is fed with a structured table generated by detecting visual elements from the image.On the existing DVQA dataset,our model has an accuracy of 58%,significantly improving on the highest reported accuracy of 46%.On PlotQA,our model has an accuracy of 22.52%,which is significantly better than state of the art models.",
    "code_link": "OCR模型：https://github.com/tesseract-ocr/tesseract\n数据集： bit.ly/PlotQA.",
    "doi": "https://openaccess.thecvf.com/content_WACV_2020/html/Methani_PlotQA_Reasoning_over_Scientific_Plots_WACV_2020_paper.html",
    "authors": "Nitesh Methani, Pritha Ganguly, Mitesh M. Khapra, Pratyush Kumar",
    "categories": [
      "High-level Semantic Cognition"
    ],
    "image": "figure/PlotQA Reasoning over Scientific Plots.png"
  },
  {
    "title": "Promises and Pitfalls: Using Large Language Models to Generate Visualization Items",
    "year": "2024",
    "keywords": "Visualization Items  \nLarge Language Models  \nVisualization Literacy Assessment",
    "abstract": "Visualization items—factual questions about visualizations that ask viewers to accomplish visualization tasks—are regularly used in the field of information visualization as educational and evaluative materials. For example, researchers of visualization literacy require large, diverse banks of items to conduct studies where the same skill is measured repeatedly on the same participants. Yet, generating a large number of high-quality, diverse items requires significant time and expertise. To address the critical need for a large number of diverse visualization items in education and research, this paper investigates the potential for large language models (LLMs) to automate the generation of multiple-choice visualization items. Through an iterative design process, we develop the VILA (Visualization Items Generated by Large LAnguage Models) pipeline, for efficiently generating visualization items that measure people's ability to accomplish visualization tasks. We use the VILA pipeline to generate 1,404 candidate items across 12 chart types and 13 visualization tasks. In collaboration with 11 visualization experts, we develop an evaluation rulebook which we then use to rate the quality of all candidate items. The result is the VILA bank of ∼1,100 items. From this evaluation, we also identify and classify current limitations of the VILA pipeline, and discuss the role of human oversight in ensuring quality. In addition, we demonstrate an application of our work by creating a visualization literacy test, VILA-VLAT, which measures people's ability to complete a diverse set of tasks on various types of visualizations; comparing it to the existing VLAT, VILA-VLAT shows moderate to high convergent validity (R =0.70). Lastly, we discuss the application areas of the VILA pipeline and the VILA bank and provide practical recommendations for their use. All supplemental materials are available at https://osf.io/ysrhq/.",
    "code_link": " https://osf.io/ysrhq",
    "doi": "https://ieeexplore.ieee.org/document/10670418",
    "authors": "Yuan Cui, Lily W. Ge, Yiren Ding, Lane Harrison, Fumeng Yang, Matthew Kay",
    "categories": [
      "High-level Semantic Cognition"
    ],
    "image": "figure/Promises and Pitfalls Using Large Language Models to Generate Visualization Items.png"
  },
  {
    "title": "Representing Charts as Text for Language Models:An In-Depth Study of Question Answering for Bar Charts",
    "year": "2024",
    "keywords": "Machine Learning\nCharts\nQuestion Answering\nLanguage Models\nChart Specifications\nVisual Explanation Generation",
    "abstract": "Machine Learning models for chart-grounded Q&A (CQA) often treat charts as images, but performing CQA on pixel values has proven challenging. We thus investigate a resource overlooked by current ML-based approaches: the declarative documents describing how charts should visually encode data (i.e., chart specifications). In this work, we use chart specifications to enhance language models (LMs) for chart-reading tasks, such that the resulting system can robustly understand language for CQA. Through a case study with 359 bar charts, we test novel fine-tuning schemes on both GPT-3 and T5 using a new dataset curated for two CQA tasks: question-answering and visual explanation generation. Our text-only approaches strongly outperform vision-based GPT-4 on explanation generation (99% vs. 63% accuracy), and show promising results for question-answering (57–67% accuracy). Through in-depth experiments, we also show that our text-only approaches are mostly robust to natural language variation.",
    "code_link": "",
    "doi": "https://research.adobe.com/publication/representing-charts-as-text-for-language-models-an-in-depth-study-of-question-answering-for-bar-charts/",
    "authors": "Victor S. Bursztyn, Jane Hoffswell, Shunan Guo, Eunyee Koh",
    "categories": [
      "High-level Semantic Cognition"
    ],
    "image": "figure/Representing Charts as Text for Language ModelsAn In-Depth Study of Question Answering for Bar Charts.png"
  },
  {
    "title": "SNIL: Generating Sports News From Insights With Large Language Models",
    "year": "2024",
    "keywords": "sports journalism\ndata visualization\nsports analytics\nnarrative structure\nlarge language models",
    "abstract": "To enhance the appeal and informativeness of data news, there is an increasing reliance on data analysis techniques and visualizations, which poses a high demand for journalists’ abilities. While numerous visual analytics systems have been developed for deriving insights, few tools specifically support and disseminate viewpoints for journalism. Thus, this work aims to facilitate the automatic creation of sports news from natural language insights. To achieve this, we conducted an extensive preliminary study on the published sports articles. Based on our findings, we propose a workflow - 1) exploring the data space behind insights, 2) generating narrative structures, 3) progressively generating each episode, and 4) mapping data spaces into communicative visualizations. We have implemented a human-AI interaction system called SNIL, which incorporates user input in conjunction with large language models (LLMs). It supports the modification of textual and graphical content within the episode-based structure by adjusting the description. We conduct user studies to demonstrate the usability of SNIL and the benefit of bridging the gap between analysis tasks and communicative tasks through expert and fan feedback.",
    "code_link": "",
    "doi": "https://ieeexplore.ieee.org/document/10507016",
    "authors": "Liqi Cheng, Dazhen Deng, Xiao Xie, Rihong Qiu, Mingliang Xu, Yingcai Wu",
    "categories": [
      "Conditional Visualization Synthesis",
      "Multi-view and Narrative Visualization Composition"
    ],
    "image": "figure/SNIL Generating Sports News From Insights With Large Language Models.png"
  },
  {
    "title": "STL-CQA: Structure-based Transformers with Localization and Encoding for Chart Question Answering",
    "year": "2020",
    "keywords": "Chart Question Answering  \nStructure-based Transformers  \nLocalization  \nEncoding  \nPre-training",
    "abstract": "Chart Question Answering (CQA) is the task of answering natural language questions about visualisations in the chart image. Recent solutions, inspired by VQA approaches, rely on image-based attention for question/answering while ignoring the inherent chart structure. We propose STL-CQA which improves the question/answering through sequential elements localization, question encoding and then, a structural transformer-based learning approach. We conduct extensive experiments while proposing pre-training tasks, methodology and also an improved dataset with more complex and balanced questions of different types. The proposed methodology shows a significant accuracy improvement compared to the state-of-the-art approaches on various chart Q/A datasets, while outperforming even human baseline on the DVQA Dataset. We also demonstrate interpretability while examining different components in the inference pipeline.",
    "code_link": "",
    "doi": "https://aclanthology.org/2020.emnlp-main.264/",
    "authors": "Hrituraj Singh, Sumit Shekhar",
    "categories": [
      "High-level Semantic Cognition"
    ],
    "image": "figure/STL-CQA Structure-based Transformers with Localization and Encoding for Chart Question Answering.png"
  },
  {
    "title": "SYNCHART: SYNTHESIZING CHARTS FROM LANGUAGE MODELS",
    "year": "2024",
    "keywords": "Chart Understanding  \nSynthetic Data  \nLarge Language Models  \nMulti-modality Models  \nData Generation  \nChartQA Task",
    "abstract": "With the release of GPT-4V(O),its use in generating pseudo labels for multi-modality tasks has gained significant popularity.However,it is still a secret how to build such advanced models from its base large language models (LLMs).This work explores the potential of using LLMs alone for data generation and develop competitive multi-modality models focusing on chart understanding.We construct a large-scale chart dataset,SynChart,which contains approximately 4million diverse chart images with over 75million dense annotations,including data tables,code,descriptions,and questionanswer sets.We trained a 4.2B chart-expert model using this dataset and achieve near-GPT-4O performance on the ChartQA task,surpassing GPT-4V.",
    "code_link": "",
    "doi": "https://arxiv.org/abs/2409.16517",
    "authors": "Mengchen Liu, Qixiu Li, Dongdong Chen, Dong Chen, Jianmin Bao, Yunsheng Li",
    "categories": [
      "High-level Semantic Cognition"
    ],
    "image": "figure/SYNCHART SYNTHESIZING CHARTS FROM LANGUAGE MODELS.png"
  },
  {
    "title": "Scaling Text-Rich Image Understanding via Code-Guided Synthetic Multimodal Data Generation",
    "year": "2025",
    "keywords": "Vision-language models\nText-rich images\nSynthetic data generation\nMultimodal data\nVision-language instruction tuning",
    "abstract": "Reasoning about images with rich text,such as charts and documents,is a critical application of vision-language models (VLMs).However,VLMs often struggle in these domains due to the scarcity of diverse text-rich visionlanguage data.To address this challenge,we present CoSyn,a framework that leverages the coding capabilities of text-only large language models (LLMs)to automatically create synthetic text-rich multimodal data.Given input text describing a target domain (e.g.,\"nutrition fact labels\"),CoSyn prompts an LLM to generate code (Python,HTML,LaTeX,etc.)for rendering synthetic images.With the underlying code as textual representations of the synthetic images,CoSyn can generate highquality instruction-tuning data,again relying on a text-only LLM.Using CoSyn,we constructed a dataset comprising 400K images and 2.7M rows of vision-language instruction-tuning data.Comprehensive experiments on seven benchmarks demonstrate that models trained on our synthetic data achieve state-of-the-art performance among competitive open-source models,including Llama 3.2,and surpass proprietary models such as GPT-4V and Gemini 1.5Flash.Furthermore,CoSyn can produce synthetic pointing data,enabling VLMs to ground information within input images,showcasing its potential for developing multimodal agents capable of acting in real-world environments.",
    "code_link": "yueyang1996.github.io/cosyn",
    "doi": "https://aclanthology.org/2025.acl-long.855/",
    "authors": "Yue Yang, Ajay Patel, Matt Deitke, Tanmay Gupta, Luca Weihs, Andrew Head, Mark Yatskar, Chris Callison-Burch, Ranjay Krishna, Aniruddha Kembhavi, Christopher Clark",
    "categories": [
      "High-level Semantic Cognition",
      "Conditional Visualization Synthesis"
    ],
    "image": "figure/Scaling Text-Rich Image Understanding via Code-Guided Synthetic Multimodal Data Generation.png"
  },
  {
    "title": "SmartMLVs: LLM-enabled Multiple Linked Views Generation for Interactive Visualization",
    "year": "2025",
    "keywords": "Large Language Model\nVisualization Generation\nInteractive Visualization\nMultiple Linked Views\nHuman-AI Collaboration",
    "abstract": "Automating the generation of multiple linked view visualization is imperative for improving data analysis efficiency. Large Language Models (LLMs) offer substantial potential for enabling this automation, yet they encounter notable challenges in understanding complex queries and producing relevant interactive visualizations. To tackle these challenges, we introduce SmartMLVs, a system designed to harness LLMs for automatic interactive multiple linked views generation with human guidance. First, we analyze the challenges LLMs may encounter when designing visualizations in place of experts. To address these challenges, we gather the essential domain knowledge required for visual analysis process and propose a framework consisting of decomposition, visualization and linking. The decomposition process applies a human-AI interaction method to clarify user requirements. For each decomposed question, the generation process handles chart type selection, data processing and visualization generation. Finally, the linking process adds interactions for views and provides users with data insights. For better human-AI collaboration, we design a system for data exploration. Our system applies the entire framework, supporting users’ interactive exploration with multiple linked views, and can iteratively generate linked views based on user feedback. We examine the effectiveness of our method through usage scenarios and evaluations.",
    "code_link": "",
    "doi": "https://ieeexplore.ieee.org/abstract/document/11021068",
    "authors": "Tian Qiu, Fen Wang, Shaohua Huang, Meng Guo, Yuheng Zhao, Jincheng Li, Siming Chen",
    "categories": [
      "Multi-view and Narrative Visualization Composition"
    ],
    "image": "figure/SmartMLVs LLM-enabled Multiple Linked Views Generation for Interactive Visualization.png"
  },
  {
    "title": "Smartboard: Visual Exploration of Team Tactics with LLM Agent",
    "year": "2024",
    "keywords": "Sports visualization\nTactic board\nTactical analysis\nLarge language models\nLLM agent\nBasketball tactics\nPlay design\nMultimodal interaction\nChain-of-thought reasoning\nRetrieval-augmented generation",
    "abstract": "Tactics play an important role in team sports by guiding how players interact on the field. Both sports fans and experts have a demand for analyzing sports tactics. Existing approaches allow users to visually perceive the multivariate tactical effects. However, these approaches require users to experience a complex reasoning process to connect the multiple interactions within each tactic to the final tactical effect. In this work, we collaborate with basketball experts and propose a progressive approach to help users gain a deeper understanding of how each tactic works and customize tactics on demand. Users can progressively sketch on a tactic board, and a coach agent will simulate the possible actions in each step and present the simulation to users with facet visualizations. We develop an extensible framework that integrates large language models (LLMs) and visualizations to help users communicate with the coach agent with multimodal inputs. Based on the framework, we design and develop Smartboard, an agent-based interactive visualization system for fine-grained tactical analysis, especially for play design. Smartboard provides users with a structured process of setup, simulation, and evolution, allowing for iterative exploration of tactics based on specific personalized scenarios. We conduct case studies based on real-world basketball datasets to demonstrate the effectiveness and usefulness of our system.",
    "code_link": "",
    "doi": "https://ieeexplore.ieee.org/document/10670515",
    "authors": "Ziao Liu, Xiao Xie, Moqi He, Wenshuo Zhao, Yihong Wu, Liqi Cheng, Hui Zhang, Yingcai Wu",
    "categories": [
      "Multimodal Interaction Perception",
      "Interaction Generation and Recommendation",
      "Agentic Visual Analytics"
    ],
    "image": "figure/Smartboard Visual Exploration of Team Tactics with LLM Agent.png"
  },
  {
    "title": "State of the Art of LLM-Enabled Interaction with Visualization",
    "year": "2026",
    "keywords": "LLM, Visualization, Interaction, Survey, Natural Language, Multimodal, PRISMA",
    "abstract": "We report on a systematic, PRISMA-guided survey of research at the intersection of LLMs and visualization, with a particular focus on visio-verbal interaction -- where verbal and visual modalities converge to support data sense-making. The emergence of Large Language Models (LLMs) has introduced new paradigms for interacting with data visualizations through natural language, leading to intuitive, multimodal, and accessible interfaces. We analyze 48 papers across six dimensions: application domain, visualization task, visualization representation, interaction modality, LLM integration, and system evaluation. Our classification framework maps LLM roles across the visualization pipeline, from data querying and transformation to visualization generation, explanation, and navigation. We highlight emerging design patterns, identify gaps in accessibility and visualization reading, and discuss the limitations of current LLMs in spatial reasoning and contextual grounding. We further reflect on evaluations of combined LLM-visualization systems, highlighting how current research projects tackle this challenge and discuss current gaps in conducting meaningful evaluations of such systems. With our survey we aim to guide future research and system design in LLM-enhanced visualization, supporting broad audiences and intelligent, conversational interfaces.",
    "code_link": "",
    "doi": "https://arxiv.org/abs/2601.14943",
    "categories": [
      "Multimodal Interaction Perception",
      "Interaction Generation and Recommendation",
      "Agentic Visual Analytics"
    ],
    "authors": "Mathis Brossier, Tobias Isenberg, Konrad Schönborn, Jonas Unger, Mario Romero, Johanna Bjorklund, Anders Ynnerman, Lonni Besançon",
    "image": "figure/State of the Art of LLM-Enabled Interaction with Visualization.png"
  },
  {
    "title": "StyleRF-VolVis: Style transfer of neural radiance fields for expressive volume visualization",
    "year": "2024",
    "keywords": "Neural Radiance Field, Style Transfer, Volume Visualization, NeRF, 3D Visualization",
    "abstract": "In volume visualization, visualization synthesis has attracted much attention due to its ability to generate novel visualizations without following the conventional rendering pipeline. However, existing solutions based on generative adversarial networks often require many training images and take significant training time. Still, issues such as low quality, consistency, and flexibility persist. This paper introduces StyleRF-VolVis, an innovative style transfer framework for expressive volume visualization (VolVis) via neural radiance field (NeRF). The expressiveness of StyleRF-VolVis is upheld by its ability to accurately separate the underlying scene geometry (i.e., content) and color appearance (i.e., style), conveniently modify color, opacity, and lighting of the original rendering while maintaining visual content consistency across the views, and effectively transfer arbitrary styles from reference images to the reconstructed 3D scene. To achieve these, we design a base NeRF model for scene geometry extraction, a palette color network to classify regions of the radiance field for photorealistic editing, and an unrestricted color network to lift the color palette constraint via knowledge distillation for non-photorealistic editing. We demonstrate the superior quality, consistency, and flexibility of StyleRF-VolVis by experimenting with various volume rendering scenes and reference images and comparing StyleRF-VolVis against other image-based (AdaIN), video-based (ReReVST), and NeRF-based (ARF and SNeRF) style rendering solutions.",
    "code_link": "",
    "doi": "https://ieeexplore.ieee.org/document/10670437",
    "categories": [
      "Conditional Visualization Synthesis"
    ],
    "authors": "Kaiyuan Tang, Chaoli Wang",
    "image": "figure/StyleRF-VolVis- Style Transfer of Neural Radiance Fields for Expressive Volume Visualization.png"
  },
  {
    "title": "Supporting expressive and faithful pictorial visualization design with visual style transfer",
    "year": "2022",
    "keywords": "Pictorial Visualization, Style Transfer, Data Visualization, Authoring Tool, Design Support",
    "abstract": "Pictorial visualizations portray data with figurative messages and approximate the audience to the visualization. Previous research on pictorial visualizations has developed authoring tools or generation systems, but their methods are restricted to specific visualization types and templates. Instead, we propose to augment pictorial visualization authoring with visual style transfer, enabling a more extensible approach to visualization design. Our work presents Vistylist, a design support tool that disentangles the visual style of a source pictorial visualization from its content and transfers the visual style to one or more intended pictorial visualizations. We evaluated Vistylist through a survey of example pictorial visualizations, a controlled user study, and expert interviews. The results indicated that Vistylist is useful for creating expressive and faithful pictorial visualizations.",
    "code_link": "",
    "doi": "https://ieeexplore.ieee.org/abstract/document/9903511",
    "categories": [
      "Conditional Visualization Synthesis"
    ],
    "authors": "Yang Shi, Pei Liu, Siji Chen, Mengdi Sun, Nan Cao",
    "image": "figure/Supporting expressive and faithful pictorial visualization design with visual style transfer.png"
  },
  {
    "title": "Synthesize Step-by-Step:Tools,Templates and LLMs as Data Generators for Reasoning-Based Chart VQA",
    "year": "2024",
    "keywords": "Synthesize Step-by-Step  \nTools  \nTemplates  \nLLMs  \nData Generators  \nReasoning-Based Chart VQA  \nData Augmentation  \nChart Visual Question Answering  \nLarge Language Models",
    "abstract": "Understanding data visualizations like charts and plots requires reasoning about both visual elements and numerics.Although strong in extractive questions,current chart visual question answering (chart VQA)models suffer on complex reasoning questions.In this work,we address the lack of reasoning ability by data augmentation.We leverage Large Language Models (LLMs),which have shown to have strong reasoning ability,as an automatic data annotator that generates question-answer annotations for chart images.The key innovation in our method lies in the Synthesize Step-by-Step strategy:our LLM-based data generator learns to decompose the complex question into step-bystep sub-questions (rationales),which are then used to derive the final answer using external tools,i.e.Python.This step-wise generation procedure is trained on synthetic data generated using a template-based QA generation pipeline.Experimental results highlight the significance of the proposed step-by-step generation.By training with the LLMaugmented data (LAMENDA),we significantly enhance the chart VQA models,achieving the state-of-the-art accuracy on the ChartQA and PlotQA datasets.In particular,our approach improves the accuracy of the previous state-of-the-art approach from 38%to 54%on the human-written questions in the ChartQA dataset,which needs strong reasoning.We hope our work underscores the potential of synthetic data and encourages further exploration of data augmentation using LLMs for reasoning-heavy tasks.",
    "code_link": "",
    "doi": "https://cvpr.thecvf.com/virtual/2024/poster/30055?",
    "authors": "Zhuowan Li, Bhavan Jasani, Peng Tang, Shabnam Ghadar",
    "categories": [
      "High-level Semantic Cognition"
    ],
    "image": "figure/Synthesize Step-by-StepTools,Templates and LLMs as Data Generators for Reasoning-Based Chart VQA.png"
  },
  {
    "title": "Table2Charts: Recommending Charts by Learning Shared Table Representations",
    "year": "2021",
    "keywords": "Table2seq\nchart recommendation\ndeep Q-learning\ncopying mechanism\nsearch sampling\ntransfer learning\ntable representations",
    "abstract": "It is common for people to create different types of charts to explore a multi-dimensional dataset (table).However,to recommend commonly composed charts in real world,one should take the challenges of efficiency,imbalanced data and table context into consideration.In this paper,we propose Table2Charts framework1which learns common patterns from a large corpus of (table,charts)pairs.Based on deep Q-learning with copying mechanism and heuristic searching,Table2Charts does table-to-sequence generation,where each sequence follows a chart template.On a large spreadsheet corpus with 165k tables and 266k charts,we show that Table2Charts could learn a shared representation of table fields so that recommendation tasks on different chart types could mutually enhance each other.Table2Charts outperforms other chart recommendation systems in both multi-type task (with doubled recall numbers R@3=0.61and R@1=0.43)and human evaluations.",
    "code_link": "https://github.com/microsoft/Table2Charts",
    "doi": "https://www.microsoft.com/en-us/research/publication/table2charts-recommending-charts-by-learning-shared-table-representations/",
    "authors": "Mengyu Zhou, Qingtao Li, Xinyi He, Yuejiang Li, Yibo Liu, Wei Ji, Shi Han, Yining Chen, Daxin Jiang, Dongmei Zhang",
    "categories": [
      "Visualization Recommendation"
    ],
    "image": "figure/Table2Charts Recommending Charts by Learning Shared Table Representations.png"
  },
  {
    "title": "Text2Vis: A Challenging and Diverse Benchmark for Generating Multimodal Visualizations from Text",
    "year": "2025",
    "keywords": "Text-to-Visualization, Benchmark, NL2Vis, Natural Language Interface, Chart Generation",
    "abstract": "Automated data visualization plays a crucial role in simplifying data interpretation, enhancing decision-making, and improving efficiency. While large language models (LLMs) have shown promise in generating visualizations from natural language, the absence of comprehensive benchmarks limits the rigorous evaluation of their capabilities. We introduce Text2Vis, a benchmark designed to assess text-to-visualization models, covering 20+ chart types and diverse data science queries, including trend analysis, correlation, outlier detection, and predictive analytics. It comprises 1,985 samples, each with a data table, natural language query, short answer, visualization code, and annotated charts. The queries involve complex reasoning, conversational turns, and dynamic data retrieval. We benchmark 11 open-source and closed-source models, revealing significant performance gaps, highlighting key challenges, and offering insights for future advancements. To close this gap, we propose the first cross-modal actor-critic agentic framework that jointly refines the textual answer and visualization code, increasing GPT-4o`s pass rate from 26% to 42% over the direct approach and improving chart quality. We also introduce an automated LLM-based evaluation framework that enables scalable assessment across thousands of samples without human annotation, measuring answer correctness, code execution success, visualization readability, and chart accuracy. We release Text2Vis at this https URL.",
    "code_link": "https://github.com/vis-nlp/Text2Vis",
    "doi": "https://arxiv.org/abs/2507.19969",
    "categories": [
      "High-level Semantic Cognition",
      "Conditional Visualization Synthesis"
    ],
    "authors": "Mizanur Rahman, Md Tahmid Rahman Laskar, Shafiq Joty, Enamul Hoque",
    "image": "figure/Text2Vis A Challenging and Diverse Benchmark for Generating Multimodal Visualizations from Text.png"
  },
  {
    "title": "The Evolving Duet of Two Modalities: A Survey on Integrating Text and Visualization for Data Communication",
    "year": "2026",
    "keywords": "Multimodal, Text, Visualization, Survey, Data Communication, Data Journalism",
    "abstract": "Text plays a fundamental yet understudied role as a narrative device in data visualization. While existing research has extensively explored text as data input and interaction modality, its function in supporting storytelling and interpretation remains fragmented. To address this gap, this work presents a systematic review of 98 publications that provide insights into using text as narrative. We investigate how text can be utilized in visualization, analyze its functions and effects, and explore how it can be designed to facilitate data communication. Our synthesis identifies significant research gaps in this domain and proposes future directions to advance the integration of text and visualization, ultimately aiming to provide guidance for designing text that enhances narrative clarity and fosters engagement.",
    "code_link": "",
    "doi": "https://dl.acm.org/doi/full/10.1145/3772318.3791962",
    "categories": [
      "Multi-view and Narrative Visualization Composition"
    ],
    "authors": "Xingyu Lan, Xi Li, Yixing Zhang, Mengqin Cheng, Jiazhe Wang, Siming Chen",
    "image": "figure/The Evolving Duet of Two Modalities A Survey on Integrating Text and Visualization for Data Communication.png"
  },
  {
    "title": "The Visualization JUDGE: Can Multimodal Foundation Models GuideVisualization Design Through Visual Perception?",
    "year": "2024",
    "keywords": "vision-language models\ngenerative models\nvisualization design",
    "abstract": "Foundation models for vision and language are the basis of AI applications across numerous sectors of society.The success of these models stems from their ability to mimic human capabilities,namely visual perception in vision models,and analytical reasoning in large language models.As visual perception and analysis are fundamental to data visualization,in this position paper we ask:how can we harness foundation models to advance progress in visualization design?Specifically,how can multimodal foundation models (MFMs)guide visualization design through visual perception?We approach these questions by investigating the effectiveness of MFMs for perceiving visualization,and formalizing the overall visualization design and optimization space.Specifically,we think that MFMs can best be viewed as judges,equipped with the ability to criticize visualizations,and provide us with actions on how to improve a visualization.We provide a deeper characterization for text-to-image generative models,and multi-modal large language models,organized by what these models provide as output,and how to utilize the output for guiding design decisions.We hope that our perspective can inspire researchers in visualization on how to approach MFMs for visualization design.",
    "code_link": "",
    "doi": "https://arxiv.org/abs/2410.04280",
    "authors": "Matthew Berger, Shusen Liu",
    "categories": [
      "Conditional Visualization Synthesis"
    ],
    "image": "figure/The Visualization JUDGE Can Multimodal Foundation Models GuideVisualization Design Through Visual Perception.png"
  },
  {
    "title": "TinyChart: Efficient Chart Understanding with Visual Token Merging and Program-of-Thoughts Learning",
    "year": "2024",
    "keywords": "Multimodal Large Language Model\nChart Understanding\nVisual Token Merging\nProgram-of-Thoughts Learning\nChartQA\nEfficient Inference",
    "abstract": "Charts are important for presenting and explaining complex data relationships. Recently, multimodal large language models (MLLMs) have shown remarkable capabilities in chart understanding. However, the sheer size of these models limits their use in resource-constrained environments. In this paper, we present TinyChart, an efficient MLLM for chart understanding with only 3B parameters. TinyChart overcomes two key challenges in efficient chart understanding: (1) reduce the burden of learning numerical computations through Program-of-Thoughts (PoT) learning, which trains the model to generate Python programs for numerical calculations, and (2) reduce lengthy vision feature sequences through Vision Token Merging, which gradually merges most similar vision tokens. Extensive experiments demonstrate that our 3B TinyChart achieves SOTA performance on various chart understanding benchmarks including ChartQA, Chart-to-Text, Chart-to-Table, OpenCQA, and ChartX. It outperforms several chart-understanding MLLMs with up to 13B parameters, and close-sourced MLLM GPT-4V on ChartQA, with higher throughput during inference due to a smaller model scale and more efficient vision encoding.",
    "code_link": "https://github.com/X-PLUG/mPLUGDocOwl/tree/main/TinyChart",
    "doi": "https://aclanthology.org/2024.emnlp-main.112/",
    "authors": "Liang Zhang, Anwen Hu, Haiyang Xu, Ming Yan, Yichen Xu, Qin Jin, Ji Zhang, Fei Huang",
    "categories": [
      "Low-level Information Perception",
      "High-level Semantic Cognition"
    ],
    "image": "figure/TinyChart Efficient Chart Understanding with Visual Token Merging and Program-of-Thoughts Learning.png"
  },
  {
    "title": "UniChart: A Universal Vision-language Pretrained Model for Chart Comprehension and Reasoning",
    "year": "2023",
    "keywords": "UniChart\nchart comprehension\nvision-language pretraining\nchart-specific objectives\ndownstream tasks",
    "abstract": "Charts are widely used for data analysis, providing visual representations and insights into complex data. To facilitate chart-based data analysis using natural language, several downstream tasks have been introduced recently such as chart question answering and chart summarization. However, existing methods for these tasks often rely on pretraining on language or vision-language tasks, neglecting the explicit modeling of chart structures (e.g., how chart elements are related to each other). To address this, we first build a large corpus of charts covering diverse topics and visual styles. We then present UniChart, a pretrained model for chart comprehension and reasoning. UniChart encodes the relevant text, data, and visual elements of charts and then uses a chart-grounded text decoder for text generation. We propose several chart-specific pretraining tasks that include: (i) low-level tasks to extract the visual elements (e.g., bars, lines) and data from charts, and (ii) high-level tasks to acquire chart understanding and reasoning skills. Our experiments demonstrate that pretraining UniChart on a large corpus with chart-specific objectives, followed by fine-tuning, yields state-of-the-art performance on four downstream tasks. Moreover, our model exhibits superior generalizability to unseen chart corpus, surpassing previous approaches that lack chart-specific objectives and utilize limited chart resources.",
    "code_link": "https://github.com/visnlp/UniChart",
    "doi": "https://aclanthology.org/2023.emnlp-main.906/?utm_source=chatgpt.com",
    "authors": "Ahmed Masry, Parsa Kavehzadeh, Xuan Long Do, Enamul Hoque, Shafiq Joty",
    "categories": [
      "Low-level Information Perception",
      "High-level Semantic Cognition"
    ],
    "image": "figure/UniChart A Universal Vision-language Pretrained Model for Chart Comprehension and Reasoning.png"
  },
  {
    "title": "User-Adaptive Visualizations: An Exploration with GPT-4",
    "year": "2024",
    "keywords": "User-Adaptive Visualizations\nGPT-4\nPersonalized Visualizations\nUser Traits\nData Visualization\nLLMs",
    "abstract": "Data visualizations aim to enhance cognition and data interpretation. However, individual differences impact visual analysis,suggesting a personalized approach may be more effective. Current efforts focus on the study of generating visualizations withLarge Language Models, lacking the user personalization component. This project explores using such models, specificallyGPT-4, for modifying data visualizations to tailor to individual user characteristics. We developed a study to test GPT-4’sability to generate personalized visualizations. Statistical analysis of our results shows that for some personas, GPT is effectiveat personalizing the visualization. However, not all personalizations led to statistically significant improvements, suggestingvariability in the effectiveness of LLM-driven personalization. These findings underline the importance of further exploringhow personalized visualizations can best meet diverse user needs.",
    "code_link": "",
    "doi": "https://diglib.eg.org/items/ed1729c7-b5cf-418c-878b-bf7bf1a46f17",
    "authors": "Fernando J. Yanez, Carolina Nobre",
    "categories": [
      "Conditional Visualization Synthesis"
    ],
    "image": "figure/User-Adaptive Visualizations An Exploration with GPT-4.png"
  },
  {
    "title": "VIS-Shepherd: Constructing Critic for LLM-based Data Visualization Generation",
    "year": "2025",
    "keywords": "LLM, Visualization, Critique, Quality Assessment, Data Integrity",
    "abstract": "Data visualization generation using Large Language Models (LLMs) has shown promising results but often produces suboptimal visualizations that require human intervention for improvement. In this work, we introduce VIS-Shepherd, a specialized Multimodal Large Language Model (MLLM)-based critic to evaluate and provide feedback for LLM-generated data visualizations. At the core of our approach is a framework to construct a high-quality visualization critique dataset, where we collect human-created visualization instances, synthesize corresponding LLM-generated instances, and construct high-quality critiques. We conduct both model-based automatic evaluation and human preference studies to evaluate the effectiveness of our approach. Our experiments show that even small (7B parameters) open-source MLLM models achieve substantial performance gains by leveraging our high-quality visualization critique dataset, reaching levels comparable to much larger open-source or even proprietary models. Our work demonstrates significant potential for MLLM-based automated visualization critique and indicates promising directions for enhancing LLM-based data visualization generation. Our project page: this https URL.",
    "code_link": "https://github.com/bopan3/VIS-Shepherd",
    "doi": "https://arxiv.org/abs/2506.13326",
    "categories": [
      "Conditional Visualization Synthesis"
    ],
    "authors": "Bo Pan, Yixiao Fu, Ke Wang, Junyu Lu, Lunke Pan, Ziyang Qian, Yuhan Chen, Guoliang Wang, Yitao Zhou, Li Zheng, Yinghao Tang, Zhen Wen, Yuchen Wu, Junhua Lu, Biao Zhu, Minfeng Zhu, Bo Zhang, Wei Chen",
    "image": "figure/VIS-Shepherd Constructing Critic for LLM-based Data Visualization Generation .png"
  },
  {
    "title": "VISANATOMY:An SVG Chart Corpus with Fine-Grained Semantic Labels",
    "year": "2025",
    "keywords": "Chart  \nSVG  \ndata visualization  \ncorpus  \ndataset  \nmultilevel fine-grained semantic labels",
    "abstract": "Chart corpora,which comprise data visualizations and their semantic labels,are crucial for advancing visualization research.However,the labels in most existing corpora are high-level (e.g.,chart types),hindering their utility for broader applications in the era of AI.In this paper,we contribute VISANATOMY,a corpus containing 942real-world SVG charts produced by over 50tools,encompassing 40chart types and featuring structural and stylistic design variations.Each chart is augmented with multi-level fine-grained labels on its semantic components,including each graphical element's type,role,and position,hierarchical groupings of elements,group layouts,and visual encodings.In total,VISANATOMY provides labels for more than 383k graphical elements.We demonstrate the richness of the semantic labels by comparing VISANATOMY with existing corpora.We illustrate its usefulness through four applications:semantic role inference for SVG elements,chart semantic decomposition,chart type classification,and content navigation for accessibility.Finally,we discuss research opportunities to further improve VisAnatomy.",
    "code_link": "https://VisAnatomy.github.io/",
    "doi": "https://ieeexplore.ieee.org/document/11262790",
    "authors": "Chen Chen, Hannah K. Bako, Peihong Yu, John Hooker, Jeffrey Joyal, Simon C. Wang, Samuel Kim, Jessica Wu, Aoxue Ding, Lara Sandeep, Alex Chen, Chayanika Sinha, Zhicheng Liu",
    "categories": [
      "Low-level Information Perception"
    ],
    "image": "figure/VISANATOMYAn SVG Chart Corpus with Fine-Grained Semantic Labels.png"
  },
  {
    "title": "VOICE: Visual Oracle for Interaction, Conversation, and Explanation",
    "year": "2025",
    "keywords": "Conversational visualization\nmultiscale data\nexplanatory visualization\nlarge language models\nscience communication\ninteractive visualization\nmolecular visualization\nnatural language interaction\nvoice control\n3D visualization\nagent architecture\ntext-to-visualization\npublic engagement\nmuseum exhibits",
    "abstract": "We present VOICE, a novel approach to science communication that connects large language models' conversational capabilities with interactive exploratory visualization. VOICE introduces several innovative technical contributions that drive our conversational visualization framework. Based on the collected design requirements, we introduce a two-layer agent architecture that can perform task assignment, instruction extraction, and coherent content generation. We employ fine-tuning and prompt engineering techniques to tailor agents' performance to their specific roles and accurately respond to user queries. Our interactive text-to-visualization method generates a flythrough sequence matching the content explanation. In addition, natural language interaction provides capabilities to navigate and manipulate 3D models in real-time. The VOICE framework can receive arbitrary voice commands from the user and respond verbally, tightly coupled with a corresponding visual representation, with low latency and high accuracy. We demonstrate the effectiveness of our approach by implementing a proof-of-concept prototype and applying it to the molecular visualization domain: analyzing three 3D molecular models with multiscale and multi-instance attributes. Finally, we conduct a comprehensive evaluation of the system, including quantitative and qualitative analyses on our collected dataset, along with a detailed public user study and expert interviews. The results confirm that our framework and prototype effectively meet the design requirements and cater to the needs of diverse target users.",
    "code_link": "",
    "doi": "https://ieeexplore.ieee.org/document/11037292",
    "authors": "Donggang Jia, Alexandra Irger, Lonni Besançon, Ondřej Strnad, Deng Luo, Johanna Björklund, Alexandre Kouyoumdjian, Anders Ynnerman, Ivan Viola",
    "categories": [
      "Multimodal Interaction Perception",
      "Interaction Generation and Recommendation",
      "Agentic Visual Analytics"
    ],
    "image": "figure/VOICE Visual Oracle for Interaction, Conversation, and Explanation.png"
  },
  {
    "title": "VisCoder: Fine-Tuning LLMs for Executable Python Visualization Code Generation",
    "year": "2025",
    "keywords": "Large language models\nVisualization code generation\nInstruction tuning\nPython\nMatplotlib\nSeaborn\nPlotly\nSelf-correction\nMulti-turn dialogue\nExecution feedback\nRuntime validation\nPandasPlotBench\nQwen2.5-Coder\nOpen-source models\nGPT-4o-mini",
    "abstract": "Large language models (LLMs) often struggle with visualization tasks like plotting diagrams, charts, where success depends on both code correctness and visual semantics. Existing instruction-tuning datasets lack execution-grounded supervision and offer limited support for iterative code correction, resulting in fragile and unreliable plot generation. We present VisCode-200K, a large-scale instruction tuning dataset for Python-based visualization and self-correction. It contains over 200K examples from two sources: (1) validated plotting code from open-source repositories, paired with natural language instructions and rendered plots; and (2) 45K multi-turn correction dialogues from Code-Feedback, enabling models to revise faulty code using runtime feedback. We fine-tune Qwen2.5-Coder-Instruct on VisCode-200K to create VisCoder, and evaluate it on PandasPlotBench. VisCoder significantly outperforms strong open-source baselines and approaches the performance of proprietary models like GPT-4o-mini. We further adopt a self-debug evaluation protocol to assess iterative repair, demonstrating the benefits of feedback-driven learning for executable, visually accurate code generation.",
    "code_link": "https://github.com/TIGER-AI-Lab/VisCoder",
    "doi": "https://aclanthology.org/2025.findings-emnlp.160/?",
    "authors": "Yuansheng Ni, Ping Nie, Kai Zou, Xiang Yue, Wenhu Chen",
    "categories": [
      "Conditional Visualization Synthesis"
    ],
    "image": "figure/VisCoder Fine-Tuning LLMs for Executable Python Visualization Code Generation.png"
  },
  {
    "title": "VisJudge-Bench: Aesthetics and Quality Assessment of Visualizations",
    "year": "2025",
    "keywords": "Visualization Quality, Aesthetics, Benchmark, Evaluation, Vision-Language Model",
    "abstract": "Visualization, a domain-specific yet widely used form of imagery, is an effective way to turn complex datasets into intuitive insights, and its value depends on whether data are faithfully represented, clearly communicated, and aesthetically designed. However, evaluating visualization quality is challenging: unlike natural images, it requires simultaneous judgment across data encoding accuracy, information expressiveness, and visual aesthetics. Although multimodal large language models (MLLMs) have shown promising performance in aesthetic assessment of natural images, no systematic benchmark exists for measuring their capabilities in evaluating visualizations. To address this, we propose VisJudge-Bench, the first comprehensive benchmark for evaluating MLLMs' performance in assessing visualization aesthetics and quality. It contains 3,090 expert-annotated samples from real-world scenarios, covering single visualizations, multiple visualizations, and dashboards across 32 chart types. Systematic testing on this benchmark reveals that even the most advanced MLLMs (such as GPT-5) still exhibit significant gaps compared to human experts in judgment, with a Mean Absolute Error (MAE) of 0.553 and a correlation with human ratings of only 0.428. To address this issue, we propose VisJudge, a model specifically designed for visualization aesthetics and quality assessment. Experimental results demonstrate that VisJudge significantly narrows the gap with human judgment, reducing the MAE to 0.421 (a 23.9% reduction) and increasing the consistency with human experts to 0.687 (a 60.5% improvement) compared to GPT-5. The benchmark is available at this https URL.",
    "code_link": "https://github.com/HKUSTDial/VisJudgeBench",
    "doi": "https://arxiv.org/abs/2510.22373",
    "categories": [
      "High-level Semantic Cognition"
    ],
    "authors": "Yupeng Xie, Zhiyang Zhang, Yifan Wu, Sirong Lu, Jiayi Zhang, Zhaoyang Yu, Jinlin Wang, Sirui Hong, Bang Liu, Chenglin Wu, Yuyu Luo",
    "image": "figure/VisJudge-Bench Aesthetics and Quality Assessment of Visualizations.png"
  },
  {
    "title": "VisText: A Benchmark for Semantically Rich Chart Captioning",
    "year": "2023",
    "keywords": "VisText\nchart captioning\nsemantically rich captions\nchart representations\nscene graphs\nlanguage models\nprefix-tuning\nchart accessibility",
    "abstract": "Captions that describe or explain charts help improve recall and comprehension of the depicted data and provide a more accessible medium for people with visual disabilities.However,current approaches for automatically generating such captions struggle to articulate the perceptual or cognitive features that are the hallmark of charts (e.g.,complex trends and patterns).In response,we introduce VisText:a dataset of 12,441pairs of charts and captions that describe the charts'construction,report key statistics,and identify perceptual and cognitive phenomena.In VisText,a chart is available as three representations:a rasterized image,a backing data table,and a scene graph —a hierarchical representation of a chart's visual elements akin to a web page's Document Object Model (DOM).To evaluate the impact of VisText,we fine-tune state-of-the-art language models on our chart captioning task and apply prefix-tuning to produce captions that vary the semantic content they convey.Our models generate coherent,semantically rich captions and perform on par with state-of-the-art chart captioning models across machine translation and text generation metrics.Through qualitative analysis,we identify six broad categories of errors that our models make that can inform future work.",
    "code_link": "https://github.com/mitvis/vistext",
    "doi": "https://aclanthology.org/2023.acl-long.401/",
    "authors": "Benny Tang, Angie Boggust, Arvind Satyanarayan",
    "categories": [
      "High-level Semantic Cognition"
    ],
    "image": "figure/VisText A Benchmark for Semantically Rich Chart Captioning.png"
  },
  {
    "title": "Vistoryteller: Designing Data Stories with LLM Agent-Based Generation and Interactive User Control",
    "year": "2026",
    "keywords": "Data Storytelling, LLM Agent, Visualization, Narrative Generation, Automated Authoring",
    "abstract": "Data stories that combine data, visualizations, and prose are widely used for communication, decision making, and persuasion, but producing them typically requires coordinated effort across specialized roles such as analysts, scripters, and designers, which is time consuming and difficult to manage. Existing AI-assisted methods generally treat storytelling as a single-agent task and offer only coarse, global controls, limiting an author’s ability to preserve and shape their communication intention over the course of a narrative. In this work, we present Vistoryteller, a multi-agent authoring system that models the division of labor found in human teams by assigning specialized large language model agents to complementary roles and orchestrating their interactions to generate cohesive, intention-aligned data stories. Vistoryteller supports fine-grained authorial control through two complementary mechanisms: a sketch-based tension-flow control for specifying how thematic emphasis and narrative tension should evolve, and a conversational interface for issuing localized directives to individual agents or to the team. We evaluate Vistoryteller with two controlled experiments and a qualitative user study. Results show that Vistoryteller generates narratives that align more closely with user intentions, preserve coherence across agent contributions, and surface diverse and expressive insights.",
    "code_link": "",
    "doi": "https://dl.acm.org/doi/10.1145/3742413.3789086",
    "categories": [
      "Multi-view and Narrative Visualization Composition"
    ],
    "authors": "Yang Shi, Chuyi Zheng, Zijian Yang, Kewei Xu, Nan Cao",
    "image": "figure/Vistoryteller Designing Data Stories with LLM Agent-Based Generation and Interactive User Control.png"
  },
  {
    "title": "Visualization Literacy of Multimodal Large Language Models- A Comparative Study",
    "year": "2024",
    "keywords": "Multimodal Large Language Model\nVisualization Literacy",
    "abstract": "The recent introduction of multimodal large language models (MLLMs) combines the inherent power of large language models (LLMs) with the renewed capabilities to reason about the multimodal context. The potential usage scenarios for MLLMs significantly outpace their text-only counterparts. Many recent works in visualization have demonstrated MLLMs' capability to understand and interpret visualization results and explain the content of the visualization to users in natural language. In the machine learning community, the general vision capabilities of MLLMs have been evaluated and tested through various visual understanding benchmarks. However, the ability of MLLMs to accomplish specific visualization tasks based on visual perception has not been properly explored and evaluated, particularly, from a visualization-centric perspective.\n\nIn this work, we aim to fill the gap by utilizing the concept of visualization literacy to evaluate MLLMs. We assess MLLMs' performance over two popular visualization literacy evaluation datasets (VLAT and mini-VLAT). Under the framework of visualization literacy, we develop a general setup to compare different multimodal large language models (e.g., GPT4-o, Claude 3Opus, Gemini 1.5Pro) as well as against existing human baselines. Our study demonstrates MLLMs' competitive performance in visualization literacy, where they outperform humans in certain tasks such as identifying correlations, clusters, and hierarchical structures.",
    "code_link": "",
    "doi": "https://arxiv.org/abs/2407.10996",
    "authors": "Zhimin Li, Haichao Miao, Valerio Pascucci, Shusen Liu",
    "categories": [
      "High-level Semantic Cognition"
    ],
    "image": "figure/Visualization Literacy of Multimodal Large Language Models- A Comparative Study.png"
  },
  {
    "title": "ViviDoc: Generating Interactive Documents through Human-Agent Collaboration",
    "year": "2026",
    "keywords": "Interactive Documents, Human-AI Collaboration, Data Visualization, LLM, Document Generation",
    "abstract": "Interactive documents help readers engage with complex ideas through dynamic visualization, interactive animations, and exploratory interfaces. However, creating such documents remains costly, as it requires both domain expertise and web development skills. Recent Large Language Model (LLM)-based agents can automate content creation, but directly applying them to interactive document generation often produces outputs that are difficult to control. To address this, we present ViviDoc, to the best of our knowledge the first work to systematically address interactive document generation. ViviDoc introduces a multi-agent pipeline (Planner, Styler, Executor, Evaluator). To make the generation process controllable, we provide three levels of human control: (1) the Document Specification (DocSpec) with SRTC Interaction Specifications (State, Render, Transition, Constraint) for structured planning, (2) a content-aware Style Palette for customizing writing and interaction styles, and (3) chat-based editing for iterative refinement. We also construct ViviBench, a benchmark of 101 topics derived from real-world interactive documents across 11 domains, along with a taxonomy of 8 interaction types and a 4-dimensional automated evaluation framework validated against human ratings (Pearson r > 0.84). Experiments show that ViviDoc achieves the highest content richness and interaction quality in both automated and human evaluation. A 12-person user study confirms that the system is easy to use, provides effective control over the generation process, and produces documents that satisfy users.",
    "code_link": "",
    "doi": "https://arxiv.org/abs/2603.27991",
    "categories": [
      "Multi-view and Narrative Visualization Composition"
    ],
    "authors": "Yinghao Tang, Yupeng Xie, Yingchaojie Feng, Tingfeng Lan, Jiale Lao, Yue Cheng, Wei Chen",
    "image": "figure/ViviDoc Generating Interactive Documents through Human-Agent Collaboration.png"
  },
  {
    "title": "VizAbility:Enhancing Chart Accessibility with LLM-based Conversational Interaction",
    "year": "2024",
    "keywords": "data visualization\naccessibility\nblind and low vision people",
    "abstract": "Traditional accessibility methods like alternative text and data tables typically underrepresent data visualization’s full potential. Keyboard-based chart navigation has emerged as a potential solution, yet efficient data exploration remains challenging. We present VizAbility, a novel system that enriches chart content navigation with conversational interaction, enabling users to use natural language for querying visual data trends. VizAbility adapts to the user’s navigation context for improved response accuracy and facilitates verbal command-based chart navigation. Furthermore, it can address queries for contextual information, designed to address the needs of visually impaired users. We designed a large language model (LLM)-based pipeline to address these user queries, leveraging chart data & encoding, user context, and external web knowledge. We conducted both qualitative and quantitative studies to evaluate VizAbility’s multimodal approach. We discuss further opportunities based on the results, including improved benchmark testing, incorporation of vision models, and integration with visualization workflows.",
    "code_link": "https://dwr.bc.edu/vizability",
    "doi": "https://dl.acm.org/doi/10.1145/3654777.3676414",
    "authors": "Joshua Gorniak, Yoon Kim, Donglai Wei, Nam Wook Kim",
    "categories": [
      "High-level Semantic Cognition"
    ],
    "image": "figure/VizAbilityEnhancing Chart Accessibility with LLM-based Conversational Interaction.png"
  },
  {
    "title": "VizChat: enhancing learning analytics dashboards with contextualised explanations using multimodal generative AI chatbots",
    "year": "2024",
    "keywords": "Learning Analytics, Conversational AI, Dashboard, Natural Language, Visualization Generation",
    "abstract": "Learning analytics dashboards (LADs) serve as pivotal tools in transforming complex learner data into actionable insights for educational stakeholders. Despite their potential, the effectiveness of LADs, particularly the visualisations they utilise, has been under scrutiny. Concerns have been raised about their potential to cause cognitive overload, especially for users with limited data visualisation literacy, thus questioning their practical utility in supporting decision-making and reflective practices. This tool paper tackles these concerns by introducing VizChat, an open-sourced, prototype chatbot designed to augment LADs by providing contextualised, AI-generated explanations for visualisations. Developed on multimodal generative AI (GPT-4V) and retrieval-augmented generation (Langchain), VizChat offers on-demand, contextually relevant explanations that aim to improve user comprehension without overwhelming them with excessive information. Through a case study, we demonstrated VizChat’s diverse capabilities, including actively seeking clarifications on ambiguous queries, personalising responses based on previous user interactions, providing contextually relevant explanations of specific visualisations, integrating information from multiple visualisations for a comprehensive response, and offering detailed insights into the data collection and analysis processes behind each visualisation. Such efforts support the paradigm shift from exploratory to explanatory approaches in LADs, highlighting the potential of integrating generative AI and chatbots to enhance the educational value of learning analytics.",
    "code_link": "",
    "doi": "https://link.springer.com/chapter/10.1007/978-3-031-64299-9_13",
    "categories": [
      "Multimodal Interaction Perception"
    ],
    "authors": "Lixiang Yan, Linxuan Zhao, Vanessa Echeverria, Yueqiao Jin, Riordan Alfredo, Xinyu Li, Dragan Gašević, Roberto Martinez-Maldonado",
    "image": "figure/VizChat- Enhancing Learning Analytics Dashboards with Contextualised Explanations Using Multimodal Generative AI Chatbots.png"
  },
  {
    "title": "VizML: A Machine Learning Approach to Visualization Recommendation",
    "year": "2019",
    "keywords": "Visualization Recommendation, Machine Learning, Deep Learning, VizML, Neural Network, CHI",
    "abstract": "Visualization recommender systems aim to lower the barrier to exploring basic visualizations by automatically generating results for analysts to search and select, rather than manually specify. Here, we demonstrate a novel machine learning-based approach to visualization recommendation that learns visualization design choices from a large corpus of datasets and associated visualizations. First, we identify five key design choices made by analysts while creating visualizations, such as selecting a visualization type and choosing to encode a column along the X- or Y-axis. We train models to predict these design choices using one million dataset-visualization pairs collected from a popular online visualization platform. Neural networks predict these design choices with high accuracy compared to baseline models. We report and interpret feature importances from one of these baseline models. To evaluate the generalizability and uncertainty of our approach, we benchmark with a crowdsourced test set, and show that the performance of our model is comparable to human performance when predicting consensus visualization type, and exceeds that of other visualization recommender systems.",
    "code_link": "",
    "doi": "https://dl.acm.org/doi/10.1145/3290605.3300358",
    "categories": [
      "Visualization Recommendation"
    ],
    "authors": "Vineet K. Nahar, Yedi Zhang, Michiel A. Bakker, Aritran Imran, Michael S. Bernstein, Jeffrey Heer, Tim Kraska, César Hidalgo",
    "image": "figure/VizML A Machine Learning Approach to Visualization Recommendation.png"
  },
  {
    "title": "Vizability: Enhancing chart accessibility with llm-based conversational interaction",
    "year": "2024",
    "keywords": "Accessibility, Chart Understanding, LLM, Visual Impairment, Conversational AI, Screen Reader",
    "abstract": "Traditional accessibility methods like alternative text and data tables typically underrepresent data visualization’s full potential. Keyboard-based chart navigation has emerged as a potential solution, yet efficient data exploration remains challenging. We present VizAbility, a novel system that enriches chart content navigation with conversational interaction, enabling users to use natural language for querying visual data trends. VizAbility adapts to the user’s navigation context for improved response accuracy and facilitates verbal command-based chart navigation. Furthermore, it can address queries for contextual information, designed to address the needs of visually impaired users. We designed a large language model (LLM)-based pipeline to address these user queries, leveraging chart data & encoding, user context, and external web knowledge. We conducted both qualitative and quantitative studies to evaluate VizAbility’s multimodal approach. We discuss further opportunities based on the results, including improved benchmark testing, incorporation of vision models, and integration with visualization workflows.",
    "code_link": "",
    "doi": "https://dl.acm.org/doi/10.1145/3654777.3676414",
    "categories": [
      "Multimodal Interaction Perception",
      "Interaction Generation and Recommendation"
    ],
    "authors": "Joshua Gorniak, Yoon Kim, Donglai Wei, Nam Wook Kim",
    "image": "figure/Vizability Enhancing chart accessibility with llm-based conversational interaction.png"
  },
  {
    "title": "WaitGPT: Monitoring and Steering Conversational LLM Agent in Data Analysis with On-the-Fly Code Visualization",
    "year": "2024",
    "keywords": "Large language models\nData analysis\nUser interface design\nConversational agents\nInteractive visualization",
    "abstract": "Large language models (LLMs)support data analysis through conversational user interfaces,as exemplified in OpenAI's ChatGPT (formally known as Advanced Data Analysis or Code Interpreter).Essentially,LLMs produce code for accomplishing diverse analysis tasks.However,presenting raw code can obscure the logic and hinder user verification.To empower users with enhanced comprehension and augmented control over analysis conducted by LLMs,we propose a novel approach to transform LLM-generated code into an interactive visual representation.In the approach,users are provided with a clear,step-by-step visualization of the LLM-generated code in real time,allowing them to understand,verify,and modify individual data operations in the analysis.Our design decisions are informed by a formative study (N=8)probing into user practice and challenges.We further developed a prototype named WaitGPT and conducted a user study (N=12)to evaluate its usability and effectiveness.The findings from the user study reveal that WaitGPT facilitates monitoring and steering of data analysis performed by LLMs,enabling participants to enhance error detection and increase their overall confidence in the results.",
    "code_link": "",
    "doi": "https://dl.acm.org/doi/10.1145/3654777.3676374",
    "authors": "Liwenhan Xie, Chengbo Zheng, Haijun Xia, Huamin Qu, Chen Zhu-Tian",
    "categories": [
      "Agentic Visual Analytics"
    ],
    "image": "figure/WaitGPT- Monitoring and Steering Conversational LLM Agent in Data Analysis with On-the-Fly Code Visualization.png"
  },
  {
    "title": "Waltzboard: Multi-Criteria Automated Dashboard Design for Exploratory Analysis",
    "year": "2025",
    "keywords": "Dashboard Design  \nExploratory Data Analysis  \nAutomated Data Analysis",
    "abstract": "We present Waltzboard,an automated dashboard design system for exploratory data analysis.Despite the benefit of dashboards,which provide a glanceable overview of data,previous dashboard design systems often require precomputation,such as training deep-learning models,and do not adapt effectively to changes in the user's intent during data analysis,hindering quick and flexible data exploration.To overcome these challenges,we introduce a dashboard evaluation framework that quantifies how a dashboard describes data in terms of five key measures:Specificity,Interestingness,Diversity,Coverage,and Parsimony.We then present a three-phase search algorithm designed to efficiently explore dashboard designs without the need for precomputation.Finally,we present a user interface that allows the user to dynamically build their own intent and reason for the design process.The result of our performance benchmark and user study demonstrates that Waltzboard not only designs a more effective dashboard within seconds but also supports flexible exploratory data analysis to meet diverse analytic needs.",
    "code_link": "https://github.com/jiwnchoi/Waltz",
    "doi": "https://ieeexplore.ieee.org/document/11021024",
    "authors": "Jiwon Choi, Jaemin Jo",
    "categories": [
      "Multi-view and Narrative Visualization Composition"
    ],
    "image": "figure/Waltzboard Multi-Criteria Automated Dashboard Design for Exploratory Analysis.png"
  },
  {
    "title": "nvBench:A Large-Scale Synthesized Dataset for Cross-Domain Natural Language to Visualization Task",
    "year": "2021",
    "keywords": "Natural Language to Visualization  \nNL2VIS  \nDeep Learning  \nCross-Domain  \nBenchmark  \nSynthesis",
    "abstract": "NL2VIS –which translates natural language (NL)queries to corresponding visualizations (VIS)–has attracted more and more attention both in commercial visualization vendors and academic researchers.In the last few years,the advanced deep learningbased models have achieved human-like abilities in many natural language processing (NLP)tasks,which clearly tells us that the deep learning-based technique is a good choice to push the field of NL2VIS.However,a big balk is the lack of benchmarks with lots of (NL,VIS)pairs.We present nvBench,the first large-scale NL2VIS benchmark,containing 25,750(NL,VIS)pairs from 750tables over 105domains,synthesized from (NL,SQL)benchmarks to support cross-domain NL2VIS task.The quality of nvBench has been extensively validated by 23experts and 300+crowd workers.Deep learning-based models training using nvBench demonstrate that nvBench can push the field of NL2VIS.",
    "code_link": "https://sites.google.com/view/nvbench/",
    "doi": "https://arxiv.org/abs/2112.12926",
    "authors": "Yuyu Luo, Jiawei Tang, Guoliang Li",
    "categories": [
      "Conditional Visualization Synthesis"
    ],
    "image": "figure/nvBenchA Large-Scale Synthesized Dataset for Cross-Domain Natural Language to Visualization Task.png"
  },
  {
    "title": "nvbench 2.0: Resolving ambiguity in text-to-visualization through stepwise reasoning",
    "year": "2025",
    "keywords": "Text-to-Visualization, Ambiguity, Benchmark, Evaluation, NL2Vis, Natural Language",
    "abstract": "Text-to-Visualization (Text2VIS) enables users to create visualizations from natural language queries, making data insights more accessible. However, Text2VIS faceschallenges in interpreting ambiguous queries, as users often express their visualization needs in imprecise language.To address this challenge, we introduce nBench 2.0, a new benchmark designed to evaluate Text2VIS systems in scenarios involving ambiguous queries. nvBench 2.0includes 7,878 natural language queries and 24,076 corresponding visualizations, derivea from 780 tables across 153 domains. It is built using a controlled ambiguity-injection pipeline that generates ambiguous queries through a reverse-generation workflow. By starting with unambiguous seed visualizations and selectively injectingambiguities, the pipeline yields multiple valid interpretations for each query, with each ambiguous query traceable to its corresponding visualization through step-wisereasoning paths.We evaluate various Large Language Models （LLMs） on their ability to perform ambiguous Text2VIS tasks using nBench 2.0. We also propose Step-Text2Vis, an LLM-basedmodel trained on nvBench 2.0, which enhances performance in ambiguous scenarios through step-wise preference optimization. Our results show that Step-Text2Visoutperforms all baselines, setting a new state-of-the-art for ambiguous Text2VIS tasks. Our source code and data are available at this https URL",
    "code_link": "https://github.com/HKUSTDial/nvBench-2.0",
    "doi": "https://arxiv.org/abs/2503.12880",
    "authors": "Tianqi Luo, Chuhan Huang, Leixian Shen, Boyan Li, Shuyu Shen, Wei Zeng, Nan Tang, Yuyu Luo",
    "categories": [
      "Conditional Visualization Synthesis"
    ],
    "image": "figure/nvbench 2.0 Resolving ambiguity in text-to-visualization through stepwise reasoning.png"
  }
];
