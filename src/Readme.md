Dev Stack Technology : React Project

Project Name : Dev Stack Technology

Three Main Features

1. Technology Showcase : Displays different technologies using API in a card with their icons, names, and relevant information.
2. Add & Manage Stack : Users can select technologies and add them to their personal technology stack.
3. Interactive & Responsive UI : Provides a clean, colorful, and responsive interface that works across different screen sizes.

Technologies Used :

• React.js
• TypeScript 
• Tailwind CSS
• DaisyUI
• React Hooks
• React Toastify (NPM Package)
• JavaScript (ES6) / TypeScript
• JSON
• Git & GitHub

Project Description :

Dev Stack Technology is a React-based web application designed to showcase and manage different technologies used by developers.Users can explore available technologies, select the ones they are interested in, and build their own technology stack.

The project was created to practice and demonstrate important React concepts such as components, props, state management, event handling, array mapping, conditional rendering, and React Hooks. It also focuses on creating a modern, responsive, and user-friendly interface using Tailwind CSS and DaisyUI.



# Question and Answer

1. What is JSX, and why is it used in React?

# => it looks like HTML but it is written as code by javascrjpt, it makes easy to read code in React component

2. What is the difference between props and state?
# => Props is like arugument it goes from parent to child but changed is not possible and State is changable when user interact

3. What does the useState hook do, and where did you use it in this project?
# => it is used for changing data for example I used useState for addButton or RemoveButton in my project

4. What does the useEffect hook do, and why did you need it to load the JSON data?
# => When I want to fetch my json data to UI it helps me a lot, for example I designed a structure by html and css , when I will use useEffect it will help me to show a lot data what I want to show in UI

5. Why does every item in a .map() list need a unique key prop?
# => Because every card look like same but informations are different and uniqe that's why to showing each card or info we need an unique id

6. What is conditional rendering? Show one place you used it (example: the empty stack message).
# => Conditional rendering will show User different information based on  condition for example I used in my functionality.jsx folder , code line: 189    stackName.length === 0 ? (
            <div className="mt-10 text-center">
              <p className="border border-[#E2E8F0] border-dashed rounded-xl p-6 text-[#64748B]">
                Your Stack is Empty
              </p>
            </div>
          ) :
otherwise show other


7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
# => When I was working button handling I used it , parent gives child function and calls that function when something happens