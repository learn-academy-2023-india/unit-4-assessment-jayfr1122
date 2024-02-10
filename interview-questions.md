# UNIT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Compare and contrast JavaScript and Ruby. What are three things they have in common and what are three differences?

Similarities

1. Both are considered Object Oriented Programming (OOP).
2. Both languages are dynamically typed.
3. Both have libraeries of premade pakages that simplify common tasks that can be downloaded and applied.

Differences

1. Javascript requires code blocks to be contained with {}, Ruby does not need {} to surround code block instead Ruby uses prompts i.e. : do
2. Javascript is client sided while Ruby is is server sided.
3. Javacript manipulates HTMO and CSS while Ruby is used in full stack web applications.

Researched answer: Similar to above, but here are additional details.
Similarities: 
- automatic garbage collection. Memory management is handled by the runtime enviornment, which automatically deallocates memory that is no longer in use. 

Differences:
- Javascript is better suited for handling concurrent tasks, such as responding to user interactions in web browsers. Ruby is more commonly used in server side applications where the focus is on parallelizing tasks across multiple processes.

2. What does it mean to implement a TDD workflow?

Your answer: Using TDD basically says that before any code is written, develop tests to be used on the code that will be written. As code is written to be tested and said code passes said tests develop more tests and code respectably incrementally increasing both. This process in theory should provide better code by not only being able to catch inadequacies quickly, but also allows for tracing back to a working state should a problem arise.

Researched answer: A longer version of above with more pertinent details below:
- 3 step cycle:
    - Red: write ad failing test
    - Green: write the minimum code to make the test pass
    - Refactor: Improve the code without changing its behaviour, ensuring that tests continue to pass.

3. What is a block in Ruby?

Your answer: A block in Ruby is contained with the words 'do' and 'end', but can also be defined by {}. Block are passed to methods 
i.e.: while, .each, .map.

Researched answer: pretty much above, but more methods listed below:
- times
- ranges 1..10, a..z
- select
all the above are considered accessors, but can be changed to mutators with the use of the bang operator 
i.e.: .method! do

4. STRETCH: What is a version manager?

Answer: Well the name pretty much sums it up, but names of different versions managers are:
RVM(Ruby Version Manager): manages Ruby versions
nvm(Node Version Manager): manages Node.js versions
pyenv: manages python versions
rbenv: another Ruby version manager
asdf: a version manager that supports multiple languages and tools.(also fun to type)

The use of a version manager in software development primarily is to simplify the process of installing, updating, and managing multile versions of software side by side. It allows devs to switch between different versions of a programming language tool based on the requirements of a specific project.

## Looking Ahead: Terms for Next Unit

Research and define the following terms.

1. Database migrations: Database migrations are a fundamental practice in modern software development, promoting maintainability, collaboration, and version control of database schemas. They provide a systematic and organized way to modify database schemas, including creating or altering tables, indexes, and other database objects. Database migrations are particularly essential in the context of web applications.

2. Model validations: Validations ensure that the data meets specific criteria or conditions, maintaining data integrity and preventing invalid or inconsistent data from being persisted. When data fails validation, the corresponding model instance will not be saved to the database, and errors will be added to the errors collection.

3. Params: The paramaters or data that are sent from a client to the server. Ruby on Rails utulizes the params hash as a seccure way to pass data since the hash is sanitized by default.
