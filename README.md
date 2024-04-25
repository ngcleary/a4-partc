CS 3041 Assignment 4 Part C: Memory Tree 
===
https://memory-tree.glitch.me/ 

Memory Tree is an application intended to aid the needs of elderly individuals with memory impairments. As my grandmother’s dementia has worsened over the past year, I have become increasingly aware of various strategies and tricks used to trigger her memory, which reduce her anxiety and her reliance on others. A constant concern of hers is remembering details about her large family. As of now, she relies on other people or various Post-It notes, digital reminders, or whiteboards to remind her about her family.

While this system works, she is often frustrated that she must rely on others, or is constantly worried that her paper notecard is not up to date with all of her grandchildren’s current ages, hobbies, schools, etc. 

Memory Tree combats this with a simple, modifiable family tree which fosters independence throughout the user’s daily life.

Depth Features
---
1. User: View the profile details of ‘Nora’ through multiple paths. From the ‘Welcome’ page, the user should select ‘See my family tree’ and navigate through various trees to view details about ‘Nora’
Path 1: Navigate directly to the Cleary tree
Path 2: Navigate to all families, then to the Cleary tree
Path 3: Navigate to all families, then directly to ‘Nora’

2. Caretaker: From the home page, navigate to the Edit my family tree’ page using the password: ‘1234’ then add a new family member to the Cleary tree with the following attributes:
Name: NEW
Parent 1: Kimberley
Parent 2: Peter
DOB: 4/23/2024

‘Canned’ Features
---
New Member: The second task is designed to simulate adding a new family member, but no data is actually being saved. The imputed information does not impact the result displayed when the ‘save’ button is clicked. However, this will still allow testing, as direct instructions are provided for the profile details. Although the information does not save, the input tags are still required, triggering an alert when they are not completed. The fields also vary in type (image requiring PNG, JPG, BMP files, dob requiring calendar, etc.)

Edit Member: Similarly, the user cannot actually edit the information in a user’s profile. Rather, the user can navigate to ‘Edit family tree’ and select ‘Cleary’ where the ‘Nora’ button is working and simulates editing a profile. The user can change the profile name, and the title of the page will display this change, however, this change will not be saved to the entire tree/other pages. An alert informs the user that these changes will not be saved when they navigate back to the home page.

Disabled Buttons: All gray buttons are intentionally disabled and not clickable/functional. When the user hovers over the disabled button, they turn red to further emphasize that they are under development.
