var defaultThemeColors = Survey
    .StylesManager
    .ThemeColors["bootstrap"];
	
	
Survey
    .Serializer
    .addProperty("page", {
        name: "navigationTitle:string",
        isLocalizable: true
    });
Survey
    .Serializer
    .addProperty("page", {
        name: "navigationDescription:string",
        isLocalizable: true
    });	

Survey
    .StylesManager
    .applyTheme();

var myCss = {
    matrixdropdown: {
        root: "table table-striped"
    },
    navigationButton: "button btn-sm"
};    

var surveyJSON = {
 "title": "Round 1 of Delphi Survey on the Quality Model for Scientific Review Report",
 "focusFirstQuestionAutomatic": false,
 "completedHtmlOnCondition": [
  {
   "html": "Thank you"
  },
  {
   "expression": "{pg2q1} = 0",
   "html": "I hope you come back later."
  }
 ],
 "pages": [
  {
   "name": "pg1",
   "elements": [
    {
     "type": "text",
     "name": "pg1auth1",
     "title": "Please, enter the authentication key.",
     "description": "The key is in the invitation email for this survey.",
     "hideNumber": true,
     "isRequired": true,
     "requiredErrorText": "Authentication error: Incorrect key!",
     "validators": [
      {
       "type": "regex",
       "text": "Authentication error: Incorrect key!",
       "regex": "(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])"
      }
     ],
     "inputType": "password",
     "maxLength": 8
    }
   ]
  },
  {
   "name": "pg2",
   "elements": [
    {
     "type": "image",
     "name": "pg2img1",
     "imageLink": "Figuras.svg",
     "imageFit": "none",
     "imageHeight": 1361,
     "imageWidth": 936
    },
    {
     "type": "radiogroup",
     "name": "pg2q1",
     "title": "Agreement:",
     "description": "I agree to participate in this Delphi study",
     "hideNumber": true,
     "isRequired": true,
     "choices": [
      {
       "value": "0",
       "text": "No"
      },
      {
       "value": "1",
       "text": "Yes"
      }
     ]
    },
    {
     "type": "html",
     "name": "pg2html1",
     "html": "<p style=\"color:blue\"><b>Pre-test question:</b></p>"
    },
    {
     "type": "comment",
     "name": "pg2q2",
     "title": "About the clarity of the text. Did you understand the goal of this Delphi study? Did you identify any ambiguity? Is there any information missing for your understanding of the study? Please, describe any observation which it regards as relevant or appropriate.",
     "hideNumber": true
    }
   ],
   "title": "Instructions for Panelists"
  },
  {
   "name": "pg3",
   "elements": [
    {
     "type": "html",
     "name": "pg3html1",
     "html": "<b>Demographic questions</b>"
    },
    {
     "type": "panel",
     "name": "pg3panel2",
     "elements": [
      {
       "type": "text",
       "name": "pg3qd1",
       "title": "1. What is your age?",
       "hideNumber": true
      },
      {
       "type": "radiogroup",
       "name": "pg3qd2",
       "maxWidth": "",
       "title": "2. What is your gender?",
       "hideNumber": true,
       "choices": [
        {
         "value": "1",
         "text": "Male"
        },
        {
         "value": "2",
         "text": "Female"
        }
       ]
      },
      {
       "type": "radiogroup",
       "name": "pg3qd3",
       "indent": -1,
       "title": "3. What is the highest academic degree you have completed?",
       "hideNumber": true,
       "choices": [
        {
         "value": "1",
         "text": "Bachelor's degree"
        },
        {
         "value": "2",
         "text": "Master's degree"
        },
        {
         "value": "3",
         "text": "Doctorate degree"
        }
       ],
       "hasOther": true
      },
      {
       "type": "text",
       "name": "pg3qd4",
       "title": "4. How long have you been working as a scientific editor (e.g., Associate Editor, Editor-in-Chief)?",
       "hideNumber": true
      },
      {
       "type": "radiogroup",
       "name": "pg3qd5",
       "title": "5. What type of journal have you worked at?",
       "hideNumber": true,
       "choices": [
        {
         "value": "item1",
         "text": "Specialized discipline-specific journal"
        },
        {
         "value": "item2",
         "text": "General multidisciplinary journal"
        },
        {
         "value": "item3",
         "text": "Both"
        }
       ],
       "hasOther": true
      },
      {
       "type": "checkbox",
       "name": "pg3qd6",
       "indent": -1,
       "title": "6. What is the subject category of the Journal?",
       "hideNumber": true,
       "choices": [
        {
         "value": "1",
         "text": "Neurosciences, Ageing and Degenerative Diseases"
        },
        {
         "value": "2",
         "text": "Immunology and Infection"
        },
        {
         "value": "3",
         "text": "Diagnostic, Therapies and Public Health"
        },
        {
         "value": "4",
         "text": "Biomedicine"
        },
        {
         "value": "5",
         "text": "Experimental Biology"
        },
        {
         "value": "6",
         "text": "Materials Science and Engineering"
        },
        {
         "value": "7",
         "text": "Bioengineering, Biotechnology and Biochemistry"
        },
        {
         "value": "8",
         "text": "Civil and Mining Engineering"
        },
        {
         "value": "9",
         "text": "Electrical Engineering and Computer Engineering"
        },
        {
         "value": "10",
         "text": "Mechanical Engineering and Engineering Systems"
        },
        {
         "value": "11",
         "text": "Physics"
        },
        {
         "value": "12",
         "text": "Mathematics"
        },
        {
         "value": "13",
         "text": "Chemistry and Chemical Engineering"
        },
        {
         "value": "14",
         "text": "Environment and Global Changes"
        },
        {
         "value": "15",
         "text": "Animal Science and Veterinarian Science"
        },
        {
         "value": "16",
         "text": "Agricultural and Forestry Sciences"
        },
        {
         "value": "17",
         "text": "Biological Sciences"
        },
        {
         "value": "18",
         "text": "Geosciences"
        },
        {
         "value": "19",
         "text": "Marine Sciences"
        },
        {
         "value": "20",
         "text": "Individuals, Institutions and Markets"
        },
        {
         "value": "21",
         "text": "Institutions, Values, Beliefs and Behaviour"
        },
        {
         "value": "22",
         "text": "Environment, Space and Population"
        },
        {
         "value": "23",
         "text": "The Human Mind and its Complexity"
        },
        {
         "value": "24",
         "text": "Cultures and Cultural Production"
        },
        {
         "value": "25",
         "text": "The Study of the Human Past"
        }
       ],
       "colCount": 2
      }
     ],
     "title": "Please answer the following demographic questions."
    },
    {
     "type": "html",
     "name": "pg3html2",
     "html": "<p style=\"color:blue\"><b>Pre-test question:</b></p>\n"
    },
    {
     "type": "comment",
     "name": "pg3qd7",
     "title": "7. About the clarity of the questions. Did you find any difficulty in understanding the instructions and/or answering the questions? Please, describe any observation which it regards as relevant or appropriate.",
     "hideNumber": true
    }
   ]
  },
  {
   "name": "pg4",
   "elements": [
    {
     "type": "html",
     "name": "pg4html1",
     "html": "This section is related to the Helpfulness dimension.\n<p>In answering these questions, it will be important to consider how each requirement can be used to achieve the quality dimension of the review report. Also, think about how a set of requirements can define the quality dimension of the review report objectively in the comments to the author and editor. And finally, imagine these requirements as part of the reviewer's guideline to achieve the expected quality in a scientific review report.\n</p>"
    },
    {
     "type": "boolean",
     "name": "pg4q1",
     "title": "Click here to take a look at all the dimension definitions.",
     "hideNumber": true,
     "defaultValue": "false"
    },
    {
     "type": "html",
     "name": "pg4html2",
     "visible": false,
     "visibleIf": "{pg4q1} = true",
     "html": "<p><b>Helpfulness:</b> This dimension refers to the utility of the information from the review report for its anticipated purpose by its intended audience. The report is helpful when the content from the comment to the editor assisting the editor's decision making, and the content from the comment to the author benefits the authors to improve the manuscript. For example, a review that clearly presents the justification for its recommendation is very useful to the editor. As well, the reports that point out the major problems of the manuscript, for example, it can be helpful from the author's perspective.</p>\n<p><b>Fairness:</b> A review process is fair when the manuscript is judged solely on the basis of its scientific merit. It means that the information from the report is unbiased and impartial, that is, the review is free of personal or professional preferences. A fair review report should contain only comments on the manuscript consistent with scientific ideals. The reviewers are expected to evaluate and judge manuscripts in a fair and objective manner with professional respect and balanced critiques.</p>\n<p><b>Thoroughness:</b> A thoroughness review means that the review has essentials details to inform the author and the editor. The editor's decision cannot be based on a simple and vague judgment from reviewers. As well, the authors need a detailed comment, the reviewer should indicate precisely what the problems are and how they may be overcome. The thoroughness review is usually of substantive length, include meaningful analyses, which will lead to an in-depth review report.</p>\n<p><b>Courteness:</b>  The review report is a product of communication between peers, within an ethical and professional process. Therefore, the tone of the report should reflect respect for the colleagues and their work, as it should be in any working relationship.  A reviewer should always be courteous, no offensive, and constructive, there is always a way to say that the study is not good or appropriate in a nice way. The review is courteous when is constructive and at the same time polite and respectful. Through courteous comments, authors are more likely to accept criticism when they realize that the reviewer was empathetic.</p>\n<p><b>Readability:</b> This dimension is related to features of the organization of the report. All the information from the review should be easily comprehended without ambiguity. The report should be well organized with structure and logical flow to easier the editor and author analysis and that allows them to best follow the points. The well-structured comments should refer to the chapters, sections, headings, and paragraphs, where within the comments are directed. Also, it is also expected to use some point-by-point structure in comments, through numbering, bullet, or any other structure that shows the organization of the review.</p>"
    },
    {
     "type": "matrixdropdown",
     "name": "pg4q2",
     "title": "1. For each requirement: You can rate the requeriment importance for the quality model according to the perspective of comments to the editor and to author. You can also suggest changing the dimension as well as suggesting modifications to the wording of requirements.",
     "hideNumber": true,
     "columns": [
      {
       "name": "c1",
       "title": "Comment to Author",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 5,
       "choices": [
        {
         "value": "5",
         "text": "Essential"
        },
        {
         "value": "4",
         "text": "Important"
        },
        {
         "value": "3",
         "text": "Moderately Important"
        },
        {
         "value": "2",
         "text": "Slightly Important"
        },
        {
         "value": "1",
         "text": "Unimportant"
        },
        {
         "value": "0",
         "text": "No opinion"
        }
       ]
      },
      {
       "name": "c2",
       "title": "Comment to Editor",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 5,
       "choices": [
        {
         "value": "5",
         "text": "Essential"
        },
        {
         "value": "4",
         "text": "Important"
        },
        {
         "value": "3",
         "text": "Moderately Important"
        },
        {
         "value": "2",
         "text": "Slightly Important"
        },
        {
         "value": "1",
         "text": "Unimportant"
        },
        {
         "value": "0",
         "text": "No opinion"
        }
       ]
      },
      {
       "name": "c3",
       "title": "Change Dimension",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 1,
       "choices": [
        {
         "value": "1",
         "text": "Helpfulness"
        },
        {
         "value": "2",
         "text": "Fairness"
        },
        {
         "value": "3",
         "text": "Thoroughness"
        },
        {
         "value": "4",
         "text": "Courteousness"
        },
        {
         "value": "5",
         "text": "Readability"
        }
       ]
      }
     ],
     "rows": [
      {
       "value": "r1",
       "text": "1. Provides a brief summary with the reviewer's interpretation of the work. "
      },
      {
       "value": "r2",
       "text": "2. Identifies strengths and weaknesses of the manuscript. "
      },
      {
       "value": "r3",
       "text": "3. Identifies both major and minor concerns."
      },
      {
       "value": "r4",
       "text": "4. Make specific suggestions for improvements of the manuscript."
      },
      {
       "value": "r5",
       "text": "5. Provides a clear explanation of the criticisms and how to resolve them."
      },
      {
       "value": "r6",
       "text": "6. Provides references and citations from the literature to support statements."
      },
      {
       "value": "r7",
       "text": "7. Provides comments to the editors congruent with those provided to the authors. "
      },
      {
       "value": "r8",
       "text": "8. Identifies major scientific problems or concerns."
      },
      {
       "value": "r9",
       "text": "9. Provides general comments, both favourable and negative."
      },
      {
       "value": "r10",
       "text": "10. Includes a clear rationale for the recommended decision (accept, reject, or revise)."
      },
      {
       "value": "r11",
       "text": "11. Provides clear and concise comments."
      },
      {
       "value": "r12",
       "text": "12. Provides balanced feedback with both good and bad points of the manuscript."
      },
      {
       "value": "r13",
       "text": "13. Includes statements related to the manuscript's overall contribution to the field."
      },
      {
       "value": "r14",
       "text": "14. Provides examples to highlight the issues."
      },
      {
       "value": "r15",
       "text": "15. Provides honest comments, but at the same time is respectful and tactful."
      },
      {
       "value": "r16",
       "text": "16. Provides suggestions for alternate ways to analyze the data."
      },
      {
       "value": "r17",
       "text": "17. Provides statements related to the importance of the manuscript."
      },
      {
       "value": "r18",
       "text": "18. Provides the reviewer's signature."
      },
      {
       "value": "r19",
       "text": "19. Includes statements related to the potential relevance of the work."
      },
      {
       "value": "r20",
       "text": "20. Provides the date of the review."
      },
      {
       "value": "r21",
       "text": "21. Mentions any omissions."
      },
      {
       "value": "r22",
       "text": "22. Includes statements related to the purpose of the study."
      },
      {
       "value": "r23",
       "text": "23. Provides an opening with the title of the manuscript."
      },
      {
       "value": "r24",
       "text": "24. Provides an overall assessment of the originality of the study."
      },
      {
       "value": "r25",
       "text": "25. Includes a polite appreciation to the author for the submission and recognition of the study."
      },
      {
       "value": "r26",
       "text": "26. Provides consistency between the comments to authors and the recommended decision."
      },
      {
       "value": "r27",
       "text": "27. Provides recommendation regarding publication, whether the paper should be accepted, revised or rejected."
      },
      {
       "value": "r28",
       "text": "28. Provides clear statement on the appropriateness and priority of research for publication."
      },
      {
       "value": "r29",
       "text": "29. Includes acknowledgments of individuals who may have assisted in conducting the review."
      },
      {
       "value": "r30",
       "text": "30. Includes alerts on any ethical concerns (e.g., plagiarism, fraud, unethical research practices)."
      },
      {
       "value": "r31",
       "text": "31. Includes statements related to the importance of the topic for that journal."
      },
      {
       "value": "r32",
       "text": "32. Suggests other professionals (e.g., statistician) when identifying areas of the study that the reviewer is unable to adequately assess."
      },
      {
       "value": "r33",
       "text": "33. Indicates whether the reviewer would like to review the manuscript again after it has been revised."
      },
      {
       "value": "r34",
       "text": "34. Thanks the editor for the opportunity."
      },
      {
       "value": "r35",
       "text": "35. Suggests a change to a manuscript type that is more appropriate for the content."
      },
      {
       "value": "r36",
       "text": "36. Indicates whether the manuscript is interesting to the readers."
      },
      {
       "value": "r37",
       "text": "37. Highlights the amount of work required before the manuscript may be suitable for publication."
      },
      {
       "value": "r38",
       "text": "38. Introduces individuals who the editor might find helpful as a reviewer in the future."
      }
     ]
    },
    {
     "type": "comment",
     "name": "pg4q3",
     "title": "2. Feel free to suggest changes and improvements to the concept of this dimension.",
     "hideNumber": true
    },
    {
     "type": "html",
     "name": "pg4html2",
     "html": "<p style=\"color:blue\"><b>Pre-test question:</b></p>\n"
    },
    {
     "type": "comment",
     "name": "pg4q4",
     "title": "3. About the clarity of the questions. Did you find any difficulty in understanding the instructions and/or answering the questions? Please, describe any observation which it regards as relevant or appropriate.",
     "hideNumber": true
    }
   ]
  },
  {
   "name": "pg5",
   "elements": [
    {
     "type": "html",
     "name": "pg5html1",
     "html": "This section is related to the Fairness dimension."
    },
    {
     "type": "boolean",
     "name": "pg5q1",
     "title": "Click here to take a look at all the dimension definitions.",
     "hideNumber": true,
     "defaultValue": "false"
    },
    {
     "type": "html",
     "name": "pg5html2",
     "visible": false,
     "visibleIf": "{pg5q1} = true",
     "html": "<p><b>Helpfulness:</b> This dimension refers to the utility of the information from the review report for its anticipated purpose by its intended audience. The report is helpful when the content from the comment to the editor assisting the editor's decision making, and the content from the comment to the author benefits the authors to improve the manuscript. For example, a review that clearly presents the justification for its recommendation is very useful to the editor. As well, the reports that point out the major problems of the manuscript, for example, it can be helpful from the author's perspective.</p>\n<p><b>Fairness:</b> A review process is fair when the manuscript is judged solely on the basis of its scientific merit. It means that the information from the report is unbiased and impartial, that is, the review is free of personal or professional preferences. A fair review report should contain only comments on the manuscript consistent with scientific ideals. The reviewers are expected to evaluate and judge manuscripts in a fair and objective manner with professional respect and balanced critiques.</p>\n<p><b>Thoroughness:</b> A thoroughness review means that the review has essentials details to inform the author and the editor. The editor's decision cannot be based on a simple and vague judgment from reviewers. As well, the authors need a detailed comment, the reviewer should indicate precisely what the problems are and how they may be overcome. The thoroughness review is usually of substantive length, include meaningful analyses, which will lead to an in-depth review report.</p>\n<p><b>Courteness:</b>  The review report is a product of communication between peers, within an ethical and professional process. Therefore, the tone of the report should reflect respect for the colleagues and their work, as it should be in any working relationship.  A reviewer should always be courteous, no offensive, and constructive, there is always a way to say that the study is not good or appropriate in a nice way. The review is courteous when is constructive and at the same time polite and respectful. Through courteous comments, authors are more likely to accept criticism when they realize that the reviewer was empathetic.</p>\n<p><b>Readability:</b> This dimension is related to features of the organization of the report. All the information from the review should be easily comprehended without ambiguity. The report should be well organized with structure and logical flow to easier the editor and author analysis and that allows them to best follow the points. The well-structured comments should refer to the chapters, sections, headings, and paragraphs, where within the comments are directed. Also, it is also expected to use some point-by-point structure in comments, through numbering, bullet, or any other structure that shows the organization of the review.</p>"
    },
    {
     "type": "matrixdropdown",
     "name": "pg5q2",
     "title": "1. For each requirement: You can rate the requeriment importance for the quality model according to the perspective of comments to the editor and to author. You can also suggest changing the dimension as well as suggesting modifications to the wording of requirements.",
     "hideNumber": true,
     "columns": [
      {
       "name": "c1",
       "title": "Comment to Author",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 5,
       "choices": [
        {
         "value": "5",
         "text": "Essential"
        },
        {
         "value": "4",
         "text": "Important"
        },
        {
         "value": "3",
         "text": "Moderately Important"
        },
        {
         "value": "2",
         "text": "Slightly Important"
        },
        {
         "value": "1",
         "text": "Unimportant"
        },
        {
         "value": "0",
         "text": "No opinion"
        }
       ]
      },
      {
       "name": "c2",
       "title": "Comment to Editor",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 5,
       "choices": [
        {
         "value": "5",
         "text": "Essential"
        },
        {
         "value": "4",
         "text": "Important"
        },
        {
         "value": "3",
         "text": "Moderately Important"
        },
        {
         "value": "2",
         "text": "Slightly Important"
        },
        {
         "value": "1",
         "text": "Unimportant"
        },
        {
         "value": "0",
         "text": "No opinion"
        }
       ]
      },
      {
       "name": "c3",
       "title": "Change Dimension",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 2,
       "choices": [
        {
         "value": "1",
         "text": "Helpfulness"
        },
        {
         "value": "2",
         "text": "Fairness"
        },
        {
         "value": "3",
         "text": "Thoroughness"
        },
        {
         "value": "4",
         "text": "Courteousness"
        },
        {
         "value": "5",
         "text": "Readability"
        }
       ]
      }
     ],
     "rows": [
      {
       "value": "r1",
       "text": "1. Provides comments solely focused on assessing the scientific merits of the study."
      },
      {
       "value": "r2",
       "text": "2. Includes no personal bias in the review, such as personal opinions or preferences."
      },
      {
       "value": "r3",
       "text": "3. Avoids self-promoting behaviors."
      }
     ]
    },
    {
     "type": "comment",
     "name": "pg5q3",
     "title": "2. Feel free to suggest changes and improvements to the concept of this dimension.",
     "hideNumber": true
    },
    {
     "type": "html",
     "name": "pg5html2",
     "html": "<p style=\"color:blue\"><b>Pre-test question:</b></p>\n"
    },
    {
     "type": "comment",
     "name": "pg5q4",
     "title": "3. About the clarity of the questions. Did you find any difficulty in understanding the instructions and/or answering the questions? Please, describe any observation which it regards as relevant or appropriate.",
     "hideNumber": true
    }
   ]
  },
  {
   "name": "pg6",
   "elements": [
    {
     "type": "html",
     "name": "pg6html1",
     "html": "This section is related to the Thoroughness dimension."
    },
    {
     "type": "boolean",
     "name": "pg6q1",
     "title": "Click here to take a look at all the dimension definitions.",
     "hideNumber": true,
     "defaultValue": "false"
    },
    {
     "type": "html",
     "name": "pg6html2",
     "visible": false,
     "visibleIf": "{pg6q1} = true",
     "html": "<p><b>Helpfulness:</b> This dimension refers to the utility of the information from the review report for its anticipated purpose by its intended audience. The report is helpful when the content from the comment to the editor assisting the editor's decision making, and the content from the comment to the author benefits the authors to improve the manuscript. For example, a review that clearly presents the justification for its recommendation is very useful to the editor. As well, the reports that point out the major problems of the manuscript, for example, it can be helpful from the author's perspective.</p>\n<p><b>Fairness:</b> A review process is fair when the manuscript is judged solely on the basis of its scientific merit. It means that the information from the report is unbiased and impartial, that is, the review is free of personal or professional preferences. A fair review report should contain only comments on the manuscript consistent with scientific ideals. The reviewers are expected to evaluate and judge manuscripts in a fair and objective manner with professional respect and balanced critiques.</p>\n<p><b>Thoroughness:</b> A thoroughness review means that the review has essentials details to inform the author and the editor. The editor's decision cannot be based on a simple and vague judgment from reviewers. As well, the authors need a detailed comment, the reviewer should indicate precisely what the problems are and how they may be overcome. The thoroughness review is usually of substantive length, include meaningful analyses, which will lead to an in-depth review report.</p>\n<p><b>Courteness:</b>  The review report is a product of communication between peers, within an ethical and professional process. Therefore, the tone of the report should reflect respect for the colleagues and their work, as it should be in any working relationship.  A reviewer should always be courteous, no offensive, and constructive, there is always a way to say that the study is not good or appropriate in a nice way. The review is courteous when is constructive and at the same time polite and respectful. Through courteous comments, authors are more likely to accept criticism when they realize that the reviewer was empathetic.</p>\n<p><b>Readability:</b> This dimension is related to features of the organization of the report. All the information from the review should be easily comprehended without ambiguity. The report should be well organized with structure and logical flow to easier the editor and author analysis and that allows them to best follow the points. The well-structured comments should refer to the chapters, sections, headings, and paragraphs, where within the comments are directed. Also, it is also expected to use some point-by-point structure in comments, through numbering, bullet, or any other structure that shows the organization of the review.</p>"
    },
    {
     "type": "matrixdropdown",
     "name": "pg6q2",
     "title": "1. For each requirement: You can rate the requeriment importance for the quality model according to the perspective of comments to the editor and to author. You can also suggest changing the dimension as well as suggesting modifications to the wording of requirements.",
     "hideNumber": true,
     "columns": [
      {
       "name": "c1",
       "title": "Comment to Author",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 5,
       "choices": [
        {
         "value": "5",
         "text": "Essential"
        },
        {
         "value": "4",
         "text": "Important"
        },
        {
         "value": "3",
         "text": "Moderately Important"
        },
        {
         "value": "2",
         "text": "Slightly Important"
        },
        {
         "value": "1",
         "text": "Unimportant"
        },
        {
         "value": "0",
         "text": "No opinion"
        }
       ]
      },
      {
       "name": "c2",
       "title": "Comment to Editor",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 5,
       "choices": [
        {
         "value": "5",
         "text": "Essential"
        },
        {
         "value": "4",
         "text": "Important"
        },
        {
         "value": "3",
         "text": "Moderately Important"
        },
        {
         "value": "2",
         "text": "Slightly Important"
        },
        {
         "value": "1",
         "text": "Unimportant"
        },
        {
         "value": "0",
         "text": "No opinion"
        }
       ]
      },
      {
       "name": "c3",
       "title": "Change Dimension",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 3,
       "choices": [
        {
         "value": "1",
         "text": "Helpfulness"
        },
        {
         "value": "2",
         "text": "Fairness"
        },
        {
         "value": "3",
         "text": "Thoroughness"
        },
        {
         "value": "4",
         "text": "Courteousness"
        },
        {
         "value": "5",
         "text": "Readability"
        }
       ]
      }
     ],
     "rows": [
      {
       "value": "r1",
       "text": "1. Includes detailed recommendation to assist authors in making necessary modifications. "
      },
      {
       "value": "r2",
       "text": "2. A thorough review has good length and sufficient details to be helpful to the editor and the author."
      },
      {
       "value": "r3",
       "text": "3. Contains a detailed analysis of the article sections."
      },
      {
       "value": "r4",
       "text": "4. Is of substantive length."
      }
     ]
    },
    {
     "type": "comment",
     "name": "pg6q3",
     "title": "2. Feel free to suggest changes and improvements to the concept of this dimension.",
     "hideNumber": true
    },
    {
     "type": "html",
     "name": "pg6html2",
     "html": "<p style=\"color:blue\"><b>Pre-test question:</b></p>\n"
    },
    {
     "type": "comment",
     "name": "pg6q4",
     "title": "3. About the clarity of the questions. Did you find any difficulty in understanding the instructions and/or answering the questions? Please, describe any observation which it regards as relevant or appropriate.",
     "hideNumber": true
    }
   ]
  },
  {
   "name": "pg7",
   "elements": [
    {
     "type": "html",
     "name": "pg7html1",
     "html": "This section is related to the Courteousness dimension."
    },
    {
     "type": "boolean",
     "name": "pg7q1",
     "title": "Click here to take a look at all the dimension definitions.",
     "hideNumber": true,
     "defaultValue": "false"
    },
    {
     "type": "html",
     "name": "pg7html2",
     "visible": false,
     "visibleIf": "{pg7q1} = true",
     "html": "<p><b>Helpfulness:</b> This dimension refers to the utility of the information from the review report for its anticipated purpose by its intended audience. The report is helpful when the content from the comment to the editor assisting the editor's decision making, and the content from the comment to the author benefits the authors to improve the manuscript. For example, a review that clearly presents the justification for its recommendation is very useful to the editor. As well, the reports that point out the major problems of the manuscript, for example, it can be helpful from the author's perspective.</p>\n<p><b>Fairness:</b> A review process is fair when the manuscript is judged solely on the basis of its scientific merit. It means that the information from the report is unbiased and impartial, that is, the review is free of personal or professional preferences. A fair review report should contain only comments on the manuscript consistent with scientific ideals. The reviewers are expected to evaluate and judge manuscripts in a fair and objective manner with professional respect and balanced critiques.</p>\n<p><b>Thoroughness:</b> A thoroughness review means that the review has essentials details to inform the author and the editor. The editor's decision cannot be based on a simple and vague judgment from reviewers. As well, the authors need a detailed comment, the reviewer should indicate precisely what the problems are and how they may be overcome. The thoroughness review is usually of substantive length, include meaningful analyses, which will lead to an in-depth review report.</p>\n<p><b>Courteness:</b>  The review report is a product of communication between peers, within an ethical and professional process. Therefore, the tone of the report should reflect respect for the colleagues and their work, as it should be in any working relationship.  A reviewer should always be courteous, no offensive, and constructive, there is always a way to say that the study is not good or appropriate in a nice way. The review is courteous when is constructive and at the same time polite and respectful. Through courteous comments, authors are more likely to accept criticism when they realize that the reviewer was empathetic.</p>\n<p><b>Readability:</b> This dimension is related to features of the organization of the report. All the information from the review should be easily comprehended without ambiguity. The report should be well organized with structure and logical flow to easier the editor and author analysis and that allows them to best follow the points. The well-structured comments should refer to the chapters, sections, headings, and paragraphs, where within the comments are directed. Also, it is also expected to use some point-by-point structure in comments, through numbering, bullet, or any other structure that shows the organization of the review.</p>"
    },
    {
     "type": "matrixdropdown",
     "name": "pg7q2",
     "title": "1. For each requirement: You can rate the requeriment importance for the quality model according to the perspective of comments to the editor and to author. You can also suggest changing the dimension as well as suggesting modifications to the wording of requirements.",
     "hideNumber": true,
     "columns": [
      {
       "name": "c1",
       "title": "Comment to Author",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 5,
       "choices": [
        {
         "value": "5",
         "text": "Essential"
        },
        {
         "value": "4",
         "text": "Important"
        },
        {
         "value": "3",
         "text": "Moderately Important"
        },
        {
         "value": "2",
         "text": "Slightly Important"
        },
        {
         "value": "1",
         "text": "Unimportant"
        },
        {
         "value": "0",
         "text": "No opinion"
        }
       ]
      },
      {
       "name": "c2",
       "title": "Comment to Editor",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 5,
       "choices": [
        {
         "value": "5",
         "text": "Essential"
        },
        {
         "value": "4",
         "text": "Important"
        },
        {
         "value": "3",
         "text": "Moderately Important"
        },
        {
         "value": "2",
         "text": "Slightly Important"
        },
        {
         "value": "1",
         "text": "Unimportant"
        },
        {
         "value": "0",
         "text": "No opinion"
        }
       ]
      },
      {
       "name": "c3",
       "title": "Change Dimension",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 4,
       "choices": [
        {
         "value": "1",
         "text": "Helpfulness"
        },
        {
         "value": "2",
         "text": "Fairness"
        },
        {
         "value": "3",
         "text": "Thoroughness"
        },
        {
         "value": "4",
         "text": "Courteousness"
        },
        {
         "value": "5",
         "text": "Readability"
        }
       ]
      }
     ],
     "rows": [
      {
       "value": "r1",
       "text": "1. Is written in a positive and constructive tone."
      },
      {
       "value": "r2",
       "text": "2. Is written in a professional or neutral tone."
      },
      {
       "value": "r3",
       "text": "3. The tone and vocabulary of the review should be academic."
      },
      {
       "value": "r4",
       "text": "4. The tone of reviews should be reflective and respectful."
      }
     ]
    },
    {
     "type": "comment",
     "name": "pg7q3",
     "title": "2. Feel free to suggest changes and improvements to the concept of this dimension.",
     "hideNumber": true
    },
    {
     "type": "html",
     "name": "pg7html2",
     "html": "<p style=\"color:blue\"><b>Pre-test question:</b></p>\n"
    },
    {
     "type": "comment",
     "name": "pg7q4",
     "title": "3. About the clarity of the questions. Did you find any difficulty in understanding the instructions and/or answering the questions? Please, describe any observation which it regards as relevant or appropriate.",
     "hideNumber": true
    }
   ]
  },
  {
   "name": "pg8",
   "elements": [
    {
     "type": "html",
     "name": "pg8html1",
     "html": "This section is related to the Readability dimension."
    },
    {
     "type": "boolean",
     "name": "pg8q1",
     "title": "Click here to take a look at all the dimension definitions.",
     "hideNumber": true,
     "defaultValue": "false"
    },
    {
     "type": "html",
     "name": "pg8html2",
     "visible": false,
     "visibleIf": "{pg8q1} = true",
     "html": "<p><b>Helpfulness:</b> This dimension refers to the utility of the information from the review report for its anticipated purpose by its intended audience. The report is helpful when the content from the comment to the editor assisting the editor's decision making, and the content from the comment to the author benefits the authors to improve the manuscript. For example, a review that clearly presents the justification for its recommendation is very useful to the editor. As well, the reports that point out the major problems of the manuscript, for example, it can be helpful from the author's perspective.</p>\n<p><b>Fairness:</b> A review process is fair when the manuscript is judged solely on the basis of its scientific merit. It means that the information from the report is unbiased and impartial, that is, the review is free of personal or professional preferences. A fair review report should contain only comments on the manuscript consistent with scientific ideals. The reviewers are expected to evaluate and judge manuscripts in a fair and objective manner with professional respect and balanced critiques.</p>\n<p><b>Thoroughness:</b> A thoroughness review means that the review has essentials details to inform the author and the editor. The editor's decision cannot be based on a simple and vague judgment from reviewers. As well, the authors need a detailed comment, the reviewer should indicate precisely what the problems are and how they may be overcome. The thoroughness review is usually of substantive length, include meaningful analyses, which will lead to an in-depth review report.</p>\n<p><b>Courteness:</b>  The review report is a product of communication between peers, within an ethical and professional process. Therefore, the tone of the report should reflect respect for the colleagues and their work, as it should be in any working relationship.  A reviewer should always be courteous, no offensive, and constructive, there is always a way to say that the study is not good or appropriate in a nice way. The review is courteous when is constructive and at the same time polite and respectful. Through courteous comments, authors are more likely to accept criticism when they realize that the reviewer was empathetic.</p>\n<p><b>Readability:</b> This dimension is related to features of the organization of the report. All the information from the review should be easily comprehended without ambiguity. The report should be well organized with structure and logical flow to easier the editor and author analysis and that allows them to best follow the points. The well-structured comments should refer to the chapters, sections, headings, and paragraphs, where within the comments are directed. Also, it is also expected to use some point-by-point structure in comments, through numbering, bullet, or any other structure that shows the organization of the review.</p>"
    },
    {
     "type": "matrixdropdown",
     "name": "pg8q2",
     "title": "1. For each requirement: You can rate the requeriment importance for the quality model according to the perspective of comments to the editor and to author. You can also suggest changing the dimension as well as suggesting modifications to the wording of requirements.",
     "hideNumber": true,
     "columns": [
      {
       "name": "c1",
       "title": "Comment to Author",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 5,
       "choices": [
        {
         "value": "5",
         "text": "Essential"
        },
        {
         "value": "4",
         "text": "Important"
        },
        {
         "value": "3",
         "text": "Moderately Important"
        },
        {
         "value": "2",
         "text": "Slightly Important"
        },
        {
         "value": "1",
         "text": "Unimportant"
        },
        {
         "value": "0",
         "text": "No opinion"
        }
       ]
      },
      {
       "name": "c2",
       "title": "Comment to Editor",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 5,
       "choices": [
        {
         "value": "5",
         "text": "Essential"
        },
        {
         "value": "4",
         "text": "Important"
        },
        {
         "value": "3",
         "text": "Moderately Important"
        },
        {
         "value": "2",
         "text": "Slightly Important"
        },
        {
         "value": "1",
         "text": "Unimportant"
        },
        {
         "value": "0",
         "text": "No opinion"
        }
       ]
      },
      {
       "name": "c3",
       "title": "Change Dimension",
       "cellType": "radiogroup",
       "colCount": 1,
       "defaultValue": 5,
       "choices": [
        {
         "value": "1",
         "text": "Helpfulness"
        },
        {
         "value": "2",
         "text": "Fairness"
        },
        {
         "value": "3",
         "text": "Thoroughness"
        },
        {
         "value": "4",
         "text": "Courteousness"
        },
        {
         "value": "5",
         "text": "Readability"
        }
       ]
      }
     ],
     "rows": [
      {
       "value": "r1",
       "text": "1. Is written referring to page numbers and line numbers in the manuscript. "
      },
      {
       "value": "r2",
       "text": "2. Provides numbered comments. "
      },
      {
       "value": "r3",
       "text": "3. Provides comments structured based on the sections of the manuscript. "
      },
      {
       "value": "r4",
       "text": "4. Provides comments organized from the most important to the least important. "
      },
      {
       "value": "r5",
       "text": "5. Provides each new comment in a new paragraph. "
      },
      {
       "value": "r6",
       "text": "6. Is written in a manner that does not reveal the intentions or results of the review."
      },
      {
       "value": "r7",
       "text": "7. Provides comments posed as clear suggestions or observations, instead of in the form of question. "
      },
      {
       "value": "r8",
       "text": "8. Is written directly, using the second person. "
      },
      {
       "value": "r9",
       "text": "9. Provides comments organized by theme (e.g., theoretical grounding, implications, etc.) "
      },
      {
       "value": "r10",
       "text": "10. Provides comments in the order of the manuscript pages. "
      },
      {
       "value": "r11",
       "text": "11. Provides comments organized complementary to the paper's format."
      }
     ]
    },
    {
     "type": "comment",
     "name": "pg8q3",
     "title": "2. Feel free to suggest changes and improvements to the concept of this dimension.",
     "hideNumber": true
    },
    {
     "type": "html",
     "name": "pg8html2",
     "html": "<p style=\"color:blue\"><b>Pre-test question:</b></p>\n"
    },
    {
     "type": "comment",
     "name": "pg8q4",
     "title": "3. About the clarity of the questions. Did you find any difficulty in understanding the instructions and/or answering the questions? Please, describe any observation which it regards as relevant or appropriate.",
     "hideNumber": true
    },
    {
     "type": "comment",
     "name": "pg8q5",
     "title": "4. How long did the survey take to complete?",
     "hideNumber": true
    }
   ]
  }
 ],
 "triggers": [
  {
   "type": "complete"
  },
  {
   "type": "complete",
   "expression": "{pg2q1} = 0"
  }
 ],
 "showProgressBar": "top",
 "firstPageIsStarted": true
};        

function sendDataToServer(survey) {
    survey.sendResult('0a2793ee-4bea-4c1f-95ce-dadd0de4a933');
};

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer,
    css: myCss
});

//$("#surveyElement").Survey({model: survey, css: myCss});    
    
    
/*
function sendDataToServer(survey) {
    survey.sendResult('41ad4457-e6f6-46d7-8e7d-9a420fe421ec');
    var resultAsString = JSON.stringify(survey.data);
    console.log(resultAsString);
    /*
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "delphi_ajax.php", true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send("text=" + resultAsString);
    
    
    $.ajax({
        type: 'POST',
	url:  'delphi_ajax.php', 
                data: {
		       type: "save",
                       text: resultAsString
				},
			success: function(resultAsString){
				alert(resultAsString); 
				},
			error: function(){
				alert( "Error" );
				},
			async: false
			});
                        
} 

*/
// window.survey = new Survey.Model(json);

/*
survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });
*/

// $("#surveyElement").Survey({model: survey});



/*
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});




$("#surveyElement").Survey({model: survey, css: myCss});

*/