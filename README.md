This is just a quick-start for my own reference. Nothing to do with the project I originally started working on...

1) Now that you've downloaded both Processing (stored in Applications) and the processingJS (a compiler/library not to be confused with Processing, itself) files (stored in downloads), add the "processing.min.js" file to your main project folder, and include the corresponding script.

2) Include a <canvas> tag (height and width either in-line or in css) with the "data-processing-soures" attribute.

3) If you've created a sketch in Processing, copy the .pde file into the main project folder and reference it as the value of the "data-processing-soures" attribute. If not,

4) Use Processing to create a 'sketch'. Upon saving, this will become a .pde file. Go back to step 3.
