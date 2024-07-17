var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "meta_frontmatter-2",
  "level": "1",
  "url": "meta_frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  copyright  "
},
{
  "id": "meta_frontmatter-preface",
  "level": "1",
  "url": "meta_frontmatter-preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": "   The linear algebra content of these notes draws heavily from notes of Nicholas Long, to the point where listing him as a coauthor is essential. However, these are being compiled for use in UW-Madison's MATH 341 course, which also serves as an introduction to proof class, and thus these notes require some expansion.  "
},
{
  "id": "sec_setting_stage",
  "level": "1",
  "url": "sec_setting_stage.html",
  "type": "Section",
  "number": "0.1",
  "title": "Setting the Stage",
  "body": " Setting the Stage  We begin with Dana Ernst's well-known Setting the Stage activity.  "
},
{
  "id": "sec_sandwiches",
  "level": "1",
  "url": "sec_sandwiches.html",
  "type": "Section",
  "number": "0.2",
  "title": "What is a sandwich?",
  "body": " What is a sandwich?  We then do Matt Salomone's Is it a sandwich? activity.  "
},
{
  "id": "sec_warmups",
  "level": "1",
  "url": "sec_warmups.html",
  "type": "Section",
  "number": "0.3",
  "title": "Warmup Problems",
  "body": " Warmup Problems   Warmup Problems   The questions on this handout will help give an overview of where linear algebra begins.     Solve:    Draw a graph of the solution set of the equation: .   If a solution has , what is or viceversa?   Draw a graph of the solution set of the equation: .  Graph the solution sets from the two previous steps together. How does your answer to part compare to your graph?       Solve:       Solve:       Wait…what just happened? Explain the results of the previous two activities. What do the graphs of the corresponding solution sets look like in relation to the graphs of the equations?      What are the possible intersections of two lines? Clearly state your conjecture.    Throughout this course we will be doing many of the same things you did in the previous questions, but we will do them in a more general setting that will allow us to solve many new and old problems.    "
},
{
  "id": "sec_warmups-2-3-1",
  "level": "2",
  "url": "sec_warmups.html#sec_warmups-2-3-1",
  "type": "Activity",
  "number": "0.1",
  "title": "",
  "body": " Solve:    Draw a graph of the solution set of the equation: .   If a solution has , what is or viceversa?   Draw a graph of the solution set of the equation: .  Graph the solution sets from the two previous steps together. How does your answer to part compare to your graph?  "
},
{
  "id": "sec_warmups-2-4-1",
  "level": "2",
  "url": "sec_warmups.html#sec_warmups-2-4-1",
  "type": "Activity",
  "number": "0.2",
  "title": "",
  "body": "  Solve:    "
},
{
  "id": "sec_warmups-2-4-2",
  "level": "2",
  "url": "sec_warmups.html#sec_warmups-2-4-2",
  "type": "Activity",
  "number": "0.3",
  "title": "",
  "body": "  Solve:    "
},
{
  "id": "sec_warmups-2-4-3",
  "level": "2",
  "url": "sec_warmups.html#sec_warmups-2-4-3",
  "type": "Question",
  "number": "0.4",
  "title": "",
  "body": "  Wait…what just happened? Explain the results of the previous two activities. What do the graphs of the corresponding solution sets look like in relation to the graphs of the equations?   "
},
{
  "id": "sec_warmups-2-4-4",
  "level": "2",
  "url": "sec_warmups.html#sec_warmups-2-4-4",
  "type": "Question",
  "number": "0.5",
  "title": "",
  "body": "  What are the possible intersections of two lines? Clearly state your conjecture.   "
},
{
  "id": "sec_reading",
  "level": "1",
  "url": "sec_reading.html",
  "type": "Section",
  "number": "1.1",
  "title": "Introduction to mathematical arguments",
  "body": " Introduction to mathematical arguments  To prepare for class, we read (most of) the first portion of Introduction to mathematical arguments by Michael Hutchings, which is posted on Canvas. Here are some of the things in the reading I want to emphasize or say more about.   If…then  We need some more vocab here. When considering if , then , we call the hypothesis and the conclusion . Critical to our understanding later is that there is exactly one circumstance in which an if…then statement (sometimes called an implication or a conditional statement ) is false: the hypothesis is true and the conclusion is false.    If and only if  This sort of statement is also called a biconditional statement . We usually prove by proving and separately that .    Negating statements  We could get really deep into the weeds of something called truth tables for this, but to be honest, we just don't have the time for that. (It's also excruciatingly dull to do it.) However, I don't want some of these things to seem magical. One way to approach the negation of a statement is that the negation is true in exactly the circumstance(s) where the original statement is false. Let's take a look at a couple of important ones.  and : This is true exactly when both are true. Thus, this is false when at least one statement is false. Hence, the negation is true when at least one statement is true. To shuffle the not around a bit, that means we need at least one of not and not to be true, so the negation is (not ) or (not ).   or : This is true when at least one is true. Thus, this is false exactly when both statements are false. In this case, both not and not are true, so the negation is (not ) and (not ).   : This false exactly when is true and is false. Thus, the negation is true in exactly this situation, which requires that both and (not ) be true, so and (not ) is the negation. We will see why this is important when we do proof by contradiction later on.      A note about quantifier symbols  In this class, you will never use the symbols or in work submitted for grading. Never. If you do, you will not get full credit for the problem. As far as I am concerned, there are two settings where these symbols are useful: in courses in mathematical logic (MATH 571, for instance) and in scratch work where a complicated statement is being negated. Once the scratchwork is done, you carefully write things using the proper words.    Theorem statements  A statement that is true and for which we have a proof is a theorem . As we go on, we will talk about related words such as proposition , lemma , and corollary , but those are all words that describe the role of a theorem. You can't go wrong by calling a true statement a thorem, so we will stick with that for the time being. Hutchings's essay somewhat silently transitions from statements of theorems that look like For every integer , if is odd, then is even. to theorem statements that look like If is an odd integer, then is even. When you see a theorem that appears to have a variable that doesn't have a quantifier attached, such as in my second example, you assume a for all quantifier on that variable out in front of the implication. Mainly a convenience of mathematical writing.     "
},
{
  "id": "sec_reading-2",
  "level": "2",
  "url": "sec_reading.html#sec_reading-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "hypothesis conclusion implication conditional statement biconditional statement theorem "
},
{
  "id": "sec_proof_practice",
  "level": "1",
  "url": "sec_proof_practice.html",
  "type": "Section",
  "number": "1.2",
  "title": "Writing First Proofs",
  "body": " Writing First Proofs   Let's first look at a sample proof. We'll use a theorem (not labelled as such) from Hutchings's notes.    For every integer , if is odd, then is even.    Let be an odd integer. Then by the definition of odd integer, there exists an integer such that . Now consider . We may substitute , which gives . Using algebra, we have . Let . Since is an integer, is also an integer. Thus, we have that , where is an integer. This is exactly what it means for to be even.      Practicing Writing Proofs    Prove the theorem If is an odd integer and is an odd integer, then is an odd integer.       Prove the theorem For every integer , is odd if and only if is even. (Recall that this requires proving two separate implications. Identify them before writing your proofs!)       Another type of theorem that we are sometimes called upon to prove is a uniqueness theorem . In such a case, we must prove that the thing in question exists as well as prove that there is only one such thing. The next activity walks you through the structure of such an argument.    We want to prove the theorem If such that and , then there exists a unique such that .    The first step in a uniqueness proof is to demonstrate that such a beast exists. One pattern for doing this is by coming up with a formula for the thing (here ) that we need to have exist and showing that does what it's supposed to. The process of how you come with the is scratchwork that doesn't go in the proof! . Thus, we want to start by finding a formula for so that . Use familiar algebra skills to do it. What you write up for your proof is going to look like Let . Now substituting and simplifying, we see: starting with and simplifying to get .    Next, we have to show that our is unique. To do so, you assume that both have the property required. Namely, that and . Now you use algebra to show that , which means that the you came up with originally really is unique.    What you have above likely has a lot of scratchwork in it. Rewrite things neatly to have a nice paragraph that proves the theorem.        Pick and choose amongst the following for more practice.   If is even, then is even.  If and are even, then is even. (What do you notice about your proof?)  Prove or disprove: If is odd, then there exists an integer such that . (If you decide the statement is true and prove it, can you prove that is unique?)  For every integer , if is an odd integer, then is an odd integer.     "
},
{
  "id": "sec_proof_practice-2-2",
  "level": "2",
  "url": "sec_proof_practice.html#sec_proof_practice-2-2",
  "type": "Theorem",
  "number": "1.1",
  "title": "",
  "body": "  For every integer , if is odd, then is even.    Let be an odd integer. Then by the definition of odd integer, there exists an integer such that . Now consider . We may substitute , which gives . Using algebra, we have . Let . Since is an integer, is also an integer. Thus, we have that , where is an integer. This is exactly what it means for to be even.   "
},
{
  "id": "sec_proof_practice-3-2-1",
  "level": "2",
  "url": "sec_proof_practice.html#sec_proof_practice-3-2-1",
  "type": "Activity",
  "number": "1.1",
  "title": "",
  "body": " Prove the theorem If is an odd integer and is an odd integer, then is an odd integer.    "
},
{
  "id": "sec_proof_practice-3-2-2",
  "level": "2",
  "url": "sec_proof_practice.html#sec_proof_practice-3-2-2",
  "type": "Activity",
  "number": "1.2",
  "title": "",
  "body": "  Prove the theorem For every integer , is odd if and only if is even. (Recall that this requires proving two separate implications. Identify them before writing your proofs!)    "
},
{
  "id": "sec_proof_practice-3-3-1",
  "level": "2",
  "url": "sec_proof_practice.html#sec_proof_practice-3-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "uniqueness theorem "
},
{
  "id": "sec_proof_practice-3-3-2",
  "level": "2",
  "url": "sec_proof_practice.html#sec_proof_practice-3-3-2",
  "type": "Activity",
  "number": "1.3",
  "title": "",
  "body": "  We want to prove the theorem If such that and , then there exists a unique such that .    The first step in a uniqueness proof is to demonstrate that such a beast exists. One pattern for doing this is by coming up with a formula for the thing (here ) that we need to have exist and showing that does what it's supposed to. The process of how you come with the is scratchwork that doesn't go in the proof! . Thus, we want to start by finding a formula for so that . Use familiar algebra skills to do it. What you write up for your proof is going to look like Let . Now substituting and simplifying, we see: starting with and simplifying to get .    Next, we have to show that our is unique. To do so, you assume that both have the property required. Namely, that and . Now you use algebra to show that , which means that the you came up with originally really is unique.    What you have above likely has a lot of scratchwork in it. Rewrite things neatly to have a nice paragraph that proves the theorem.   "
},
{
  "id": "sec_proof_practice-3-4-1",
  "level": "2",
  "url": "sec_proof_practice.html#sec_proof_practice-3-4-1",
  "type": "Activity",
  "number": "1.4",
  "title": "",
  "body": "  Pick and choose amongst the following for more practice.   If is even, then is even.  If and are even, then is even. (What do you notice about your proof?)  Prove or disprove: If is odd, then there exists an integer such that . (If you decide the statement is true and prove it, can you prove that is unique?)  For every integer , if is an odd integer, then is an odd integer.  "
},
{
  "id": "sec_solving_linear_systems",
  "level": "1",
  "url": "sec_solving_linear_systems.html",
  "type": "Section",
  "number": "2.1",
  "title": "Solving Linear Systems",
  "body": " Solving Linear Systems   Elementary Operations  Our first discussion of linear algebra will cover the ideas of efficiently solving a system of linear equations and matrix operations.  A system of linear equations in variables can be written: The term is the coefficient of the -th variable (denoted ) in the -th equation. In these notes, we will only consider real values for the coefficients of our linear systems, i.e. . A solution is a choice of variable values that satisfies all equations in the system. A solution is not a particular variable value but must include a choice for all variables in the system. The solution set for a system of equations is the set of all possible solutions. We will have many ways to describe solutions to a system this semester but they all specify the values of , , ..., and , typically as an ordered -tuple ( , , …, ).   Is a solution to the following system?    The previous problem shows how easy it is to check if a set of variable values is a solution. However, finding a solution or the set of all solutions is harder but very important to many problems. Generally speaking, the process of finding the solution set for a system of equations is to trade the system of equations you have for an equivalent system (a system with the same solution set).    For each pair of equations given, state whether is equivalent to .   and  and  and   Hopefully it will be easier to explicitly write the solution set of the new equivalent system. An elementary operation on a system of equations is an operation of the form:  multiplying an equation by a non-zero scalar  switching two equations  adding a multiple of one equation to another equation      For this question, we will consider the following system of linear equations:    Multiply the second equation in our system by negative three and state the new system of equations.  Write a few sentences about why the new system of equations given in the previous part is equivalent to the original system.  Write a few sentences about why switching the order in which equations are presented in a system does not change the set of solutions.  Write out the equation obtained by multiplying the second equation in the original system by a non-zero scalar (which we will call ) and adding to the first equation.  Replace the second equation in the original system with your answer to the previous part, which we will call System 2. Prove that System 2 is equivalent to the original system. In other words, you need to show that is a solution of the equations :  if and only if  is a solution to System 2.    Solve the following systems just using elementary operations. Remember to show your work.        A system of equations is consistent if there exists at least one solution to the system. In other words, a consistent system of equations has a nonempty solution set. A system that is not consistent is said to be inconsistent .  In , note that you didn't change anything but the coefficients in the system of equations as you traded one system for another. Some of the coefficients probably became zero, but you didn't really eliminate any variables or consider a totally different problem. We will use matrices to efficiently store, and manipulate the coefficients in a system of linear equations, since they are all that matter for now. Matrices will have many uses in this and other courses, and we will use capital letters like and to denote matrices. Matrices will be rectangular arrays with the same number of entries in each row and the same number of entries in each column. The size of a matrix is given (in order) as the number of rows by the number of columns, so a by matrix has rows and columns.  In order to specify what entry we are referring to in a matrix, we need an ordered pair of indices telling us the number of the row and number of the column to look in respectively. For instance, if , then the entry of is in the third row and 2nd column. You could also write this as . The -th row of a matrix will be denoted and the -th column will be denoted .  In order to distinguish vectors (as being more than just by matrices), we will use the arrow notation and lower case symbols like and to denote vectors. Unless otherwise stated, we will use column vectors. For instance, if , then the second component of is the scalar . The size of a vector in is the number of components the vector has. In Chapter 2, we will deal with a much more general notion of vectors that will not have components like vectors in .  The coefficient matrix of a linear system of equations in variables is a by matrix whose entry is the coefficient of the -th variable, , in the -th equation of the system. The augmented matrix of a linear system of equations in variables is a by matrix whose first columns are the coefficient matrix of the system and the last column is the constant terms from the right side of each equation.  The system has a coefficient matrix and an augmented matrix of   For some properties of the system of equations, we need only look at the coefficient matrix but others will need the augmented matrix. It is important to know the difference and be able to state which corresponding matrix you are using in your work.    Consider the various systems that have appeared earlier in this section when answering the following questions. That means each question will have several answers. Clearly indicate which earlier system each belongs to.    What is the coefficient matrix for the previous systems?   What is the augmented matrix for the previous systems?   The elementary operations on equations outlined above will correspond to elementary row operations on matrices as well. Specifically, an elementary row operation on a matrix is an operation of the form:  multiplying a row by a non-zero scalar  switching two rows  adding a multiple of one row to another row  We now have operations to trade our system of equations for an equivalent system, but we have not stated a way to make sure that the solution set will be easy to explicitly state from our new equivalent system. The following matrix forms will be useful for determining solution sets and various other properties of the corresponding system of equations.    A rectangular matrix is in row echelon form if it has the following three properties:  All nonzero rows are above any rows of all zeros.  Each leading entry (being the first non-zero entry) of a row is in a column to the right of the leading entry of the row above it.  All entries in a column below a leading entry are zeros.    If a matrix in row echelon form satisfies the following additional properties, then we say the matrix is in reduced row echelon form :  The leading entry in each nonzero row is 1.  Each leading 1 is the only nonzero entry in its column.      The leading entry in a nonzero row of the row echelon form is called a pivot . The column in which a pivot occurs is called a pivot column and the corresponding variable is a basic variable or pivot variable . A variable corresponding to a column in which the coefficient matrix does not have a pivot are called free variables . While the echelon form is needed to find where pivots will occur, we will sometimes refer to pivot positions of a matrix even when the matrix is not in echelon form.    The reduced row echelon form of a rectangular matrix is unique.    It is important to note that the row echelon form of a matrix is not unique.   Give an example of a matrix that has the following properties. If such a matrix cannot exist, explain why.   satisfies the first two properties of row echelon form but does not satisfy the third.  satisfies the first and third properties of row echelon form but does not satisfy the second.  satisfies the second and third properties of row echelon form but does not satisfy the first.  satisfies the three properties of row echelon form but does not satisfy the first property of reduced row echelon form.  satisfies the properties of row echelon form and the first property of reduced row echelon form but does not satisfy the second property of reduced row echelon form.    List out all possible row echelon forms of 3 by 4 matrices using the symbols for a pivot, for a non-pivot entry (possibly ), and (when an entry must be ). For each of these, list out which variables are pivot variables and which are free variables.  There are 15 possible.   List out all possible reduced row echelon forms of 3 by 4 matrices using the symbols for a pivot, for a non-pivot entry (possibly ), and (when an entry must be ). What value must the entries be? For each of these, list out which variables are pivot variables and which are free variables.    Solve each of the following systems by converting to an augmented matrix and using elementary row operations to reduce the augmented matrix to reduced row echelon form. With each reduced row echelon form, put a box around all pivot entries. Use the system of equations corresponding to the reduced row echelon form to write out the solution set for each system.           Once you have the augmented matrix for a system of linear equations in reduced row-echelon form, how do you use it to determine the solution set for the system? Write a step-by-step procedure that is general enough to be used on any system of linear equations. Be aware of any implicit assumptions you're making (and try to avoid them).    Two of the most important questions we will consider this semester are:  Is the system consistent?  If a solution exists, is the solution unique?      Look back at your results so far and try to figure out what properties of the system (or corresponding matrices) will help us answer question 1 and which properties of the system will help us answer question 2. Write a conjecture about each question.    In class, we came up with statements of the following two theorems:   Consistency Theorem   A system of equations is consistent if and only if the row echelon form of its augmented matrix has no pivot entries in the rightmost column. Equivalently, a system of equations is inconsistent if and only if the row echelon form of its augmented matrix has a pivot entry in the rightmost column.     Uniqueness Theorem   A system of equations with variables has a unique solution if and only if its augmented matrix has pivot entries and no pivot entry in the rightmost column.    For the moment, proving these theorems is beyond our proof-writing skills. We may return to proving these theorems at a later stage, however.    Using the statement of the and , treat each of your answers to as an augmented matrix of a linear system of equations and state:  whether each corresponding system of equations will be consistent, inconsistent, or you can't tell.  whether each corresponding system of equations will have a unique solution, multiple solutions, no solutions, or you can't tell.        Using the statement of the and , treat each of your answers to as a coefficient matrix of a linear system of equations and state:  whether each corresponding system of equations will be consistent, inconsistent, or you can't tell.  whether each corresponding system of equations will have a unique solution, multiple solutions, no solutions, or you can't tell.      You will probably need to restate the theorems or think about how coefficient matrices are different to augmented matrices!     Geometric Interpretation of a Solution Set  Recall from earlier, that the solution set of a linear equation in two variables was a line in (the plane) and that the solution set of a system of two equations in two variables was possibly a point, a line, or empty. Similarly, the solution set for a linear equation in three variables will be a plane in 3-space ( ).     List out all the possible ways two planes can intersect in a three dimensional space.  List out all the possible ways three planes can intersect in a three dimensional space.  List out all the possible ways four planes can intersect in a three dimensional space.  List out all the possible ways five planes can intersect in a three dimensional space.     We don't usually draw what a solution set of a linear equation in four variables looks like because drawing in four dimensions is difficult. The graph os a single linear equation in four variables would be called a hyperplane in -space. Although we don't draw hyperplanes in -space, the intersections of hyperplanes will work very similarly to the pictures we can draw in 3-space (also known as ).   Why does the graph of a linear equation in variables need to be a flat dimensional hyperplane?   We can use the open source computer algebra system SageMath to plot things, and we can even do it right here in the course notes. Click the button to plot a plane below.   Plotting the equations, , , and in red, yellow, and green respectively gives:    Does your answer to make sense with this plot? Explain.    For each of the systems in , use SageMath to draw a plot of each of the equations in the system and write a sentence for each system about why the plot and your answer to make sense.   You can edit the code block above and click the button again, and it will update the graph.   If you remember parametric equations of lines and planes in space from multivariable calculus, then we will return to those ideas soon    "
},
{
  "id": "sec_solving_linear_systems-2-3",
  "level": "2",
  "url": "sec_solving_linear_systems.html#sec_solving_linear_systems-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coefficient solution solution set "
},
{
  "id": "sec_solving_linear_systems-2-4",
  "level": "2",
  "url": "sec_solving_linear_systems.html#sec_solving_linear_systems-2-4",
  "type": "Activity",
  "number": "2.1",
  "title": "",
  "body": " Is a solution to the following system?   "
},
{
  "id": "sec_solving_linear_systems-2-5",
  "level": "2",
  "url": "sec_solving_linear_systems.html#sec_solving_linear_systems-2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equivalent "
},
{
  "id": "sec_solving_linear_systems-2-6",
  "level": "2",
  "url": "sec_solving_linear_systems.html#sec_solving_linear_systems-2-6",
  "type": "Activity",
  "number": "2.2",
  "title": "",
  "body": "  For each pair of equations given, state whether is equivalent to .   and  and  and  "
},
{
  "id": "sec_solving_linear_systems-2-7",
  "level": "2",
  "url": "sec_solving_linear_systems.html#sec_solving_linear_systems-2-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elementary operation "
},
{
  "id": "sec_solving_linear_systems-2-8",
  "level": "2",
  "url": "sec_solving_linear_systems.html#sec_solving_linear_systems-2-8",
  "type": "Activity",
  "number": "2.3",
  "title": "",
  "body": "  For this question, we will consider the following system of linear equations:    Multiply the second equation in our system by negative three and state the new system of equations.  Write a few sentences about why the new system of equations given in the previous part is equivalent to the original system.  Write a few sentences about why switching the order in which equations are presented in a system does not change the set of solutions.  Write out the equation obtained by multiplying the second equation in the original system by a non-zero scalar (which we will call ) and adding to the first equation.  Replace the second equation in the original system with your answer to the previous part, which we will call System 2. Prove that System 2 is equivalent to the original system. In other words, you need to show that is a solution of the equations :  if and only if  is a solution to System 2.  "
},
{
  "id": "ex_solve_sys_prac",
  "level": "2",
  "url": "sec_solving_linear_systems.html#ex_solve_sys_prac",
  "type": "Exercise",
  "number": "2.1",
  "title": "",
  "body": " Solve the following systems just using elementary operations. Remember to show your work.       "
},
{
  "id": "sec_solving_linear_systems-2-10",
  "level": "2",
  "url": "sec_solving_linear_systems.html#sec_solving_linear_systems-2-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "consistent inconsistent "
},
{
  "id": "sec_solving_linear_systems-2-12",
  "level": "2",
  "url": "sec_solving_linear_systems.html#sec_solving_linear_systems-2-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "entry -th row -th column "
},
{
  "id": "sec_solving_linear_systems-2-13",
  "level": "2",
  "url": "sec_solving_linear_systems.html#sec_solving_linear_systems-2-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vectors component "
},
{
  "id": "sec_solving_linear_systems-2-14",
  "level": "2",
  "url": "sec_solving_linear_systems.html#sec_solving_linear_systems-2-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coefficient matrix augmented matrix "
},
{
  "id": "sec_solving_linear_systems-2-17",
  "level": "2",
  "url": "sec_solving_linear_systems.html#sec_solving_linear_systems-2-17",
  "type": "Activity",
  "number": "2.4",
  "title": "",
  "body": "  Consider the various systems that have appeared earlier in this section when answering the following questions. That means each question will have several answers. Clearly indicate which earlier system each belongs to.    What is the coefficient matrix for the previous systems?   What is the augmented matrix for the previous systems?  "
},
{
  "id": "sec_solving_linear_systems-2-18",
  "level": "2",
  "url": "sec_solving_linear_systems.html#sec_solving_linear_systems-2-18",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "elementary row operation "
},
{
  "id": "sec_solving_linear_systems-2-19",
  "level": "2",
  "url": "sec_solving_linear_systems.html#sec_solving_linear_systems-2-19",
  "type": "Definition",
  "number": "2.2",
  "title": "",
  "body": "  A rectangular matrix is in row echelon form if it has the following three properties:  All nonzero rows are above any rows of all zeros.  Each leading entry (being the first non-zero entry) of a row is in a column to the right of the leading entry of the row above it.  All entries in a column below a leading entry are zeros.    If a matrix in row echelon form satisfies the following additional properties, then we say the matrix is in reduced row echelon form :  The leading entry in each nonzero row is 1.  Each leading 1 is the only nonzero entry in its column.     "
},
{
  "id": "sec_solving_linear_systems-2-20",
  "level": "2",
  "url": "sec_solving_linear_systems.html#sec_solving_linear_systems-2-20",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pivot pivot column basic variable pivot variable free variables "
},
{
  "id": "sec_solving_linear_systems-2-21",
  "level": "2",
  "url": "sec_solving_linear_systems.html#sec_solving_linear_systems-2-21",
  "type": "Theorem",
  "number": "2.3",
  "title": "",
  "body": "  The reduced row echelon form of a rectangular matrix is unique.   "
},
{
  "id": "sec_solving_linear_systems-2-23",
  "level": "2",
  "url": "sec_solving_linear_systems.html#sec_solving_linear_systems-2-23",
  "type": "Activity",
  "number": "2.5",
  "title": "",
  "body": " Give an example of a matrix that has the following properties. If such a matrix cannot exist, explain why.   satisfies the first two properties of row echelon form but does not satisfy the third.  satisfies the first and third properties of row echelon form but does not satisfy the second.  satisfies the second and third properties of row echelon form but does not satisfy the first.  satisfies the three properties of row echelon form but does not satisfy the first property of reduced row echelon form.  satisfies the properties of row echelon form and the first property of reduced row echelon form but does not satisfy the second property of reduced row echelon form.  "
},
{
  "id": "ex_3x4_REF",
  "level": "2",
  "url": "sec_solving_linear_systems.html#ex_3x4_REF",
  "type": "Exercise",
  "number": "2.4",
  "title": "",
  "body": " List out all possible row echelon forms of 3 by 4 matrices using the symbols for a pivot, for a non-pivot entry (possibly ), and (when an entry must be ). For each of these, list out which variables are pivot variables and which are free variables.  There are 15 possible. "
},
{
  "id": "ex_3x4_RREF",
  "level": "2",
  "url": "sec_solving_linear_systems.html#ex_3x4_RREF",
  "type": "Exercise",
  "number": "2.5",
  "title": "",
  "body": " List out all possible reduced row echelon forms of 3 by 4 matrices using the symbols for a pivot, for a non-pivot entry (possibly ), and (when an entry must be ). What value must the entries be? For each of these, list out which variables are pivot variables and which are free variables.  "
},
{
  "id": "ex_five_systems",
  "level": "2",
  "url": "sec_solving_linear_systems.html#ex_five_systems",
  "type": "Exercise",
  "number": "2.6",
  "title": "",
  "body": " Solve each of the following systems by converting to an augmented matrix and using elementary row operations to reduce the augmented matrix to reduced row echelon form. With each reduced row echelon form, put a box around all pivot entries. Use the system of equations corresponding to the reduced row echelon form to write out the solution set for each system.        "
},
{
  "id": "sec_solving_linear_systems-2-27",
  "level": "2",
  "url": "sec_solving_linear_systems.html#sec_solving_linear_systems-2-27",
  "type": "Question",
  "number": "2.6",
  "title": "",
  "body": "  Once you have the augmented matrix for a system of linear equations in reduced row-echelon form, how do you use it to determine the solution set for the system? Write a step-by-step procedure that is general enough to be used on any system of linear equations. Be aware of any implicit assumptions you're making (and try to avoid them).   "
},
{
  "id": "sec_solving_linear_systems-2-29",
  "level": "2",
  "url": "sec_solving_linear_systems.html#sec_solving_linear_systems-2-29",
  "type": "Question",
  "number": "2.7",
  "title": "",
  "body": "  Look back at your results so far and try to figure out what properties of the system (or corresponding matrices) will help us answer question 1 and which properties of the system will help us answer question 2. Write a conjecture about each question.   "
},
{
  "id": "thm_consistency",
  "level": "2",
  "url": "sec_solving_linear_systems.html#thm_consistency",
  "type": "Theorem",
  "number": "2.7",
  "title": "Consistency Theorem.",
  "body": " Consistency Theorem   A system of equations is consistent if and only if the row echelon form of its augmented matrix has no pivot entries in the rightmost column. Equivalently, a system of equations is inconsistent if and only if the row echelon form of its augmented matrix has a pivot entry in the rightmost column.   "
},
{
  "id": "thm_uniqueness",
  "level": "2",
  "url": "sec_solving_linear_systems.html#thm_uniqueness",
  "type": "Theorem",
  "number": "2.8",
  "title": "Uniqueness Theorem.",
  "body": " Uniqueness Theorem   A system of equations with variables has a unique solution if and only if its augmented matrix has pivot entries and no pivot entry in the rightmost column.   "
},
{
  "id": "sec_solving_linear_systems-2-34",
  "level": "2",
  "url": "sec_solving_linear_systems.html#sec_solving_linear_systems-2-34",
  "type": "Activity",
  "number": "2.8",
  "title": "",
  "body": "  Using the statement of the and , treat each of your answers to as an augmented matrix of a linear system of equations and state:  whether each corresponding system of equations will be consistent, inconsistent, or you can't tell.  whether each corresponding system of equations will have a unique solution, multiple solutions, no solutions, or you can't tell.     "
},
{
  "id": "sec_solving_linear_systems-2-35",
  "level": "2",
  "url": "sec_solving_linear_systems.html#sec_solving_linear_systems-2-35",
  "type": "Activity",
  "number": "2.9",
  "title": "",
  "body": "  Using the statement of the and , treat each of your answers to as a coefficient matrix of a linear system of equations and state:  whether each corresponding system of equations will be consistent, inconsistent, or you can't tell.  whether each corresponding system of equations will have a unique solution, multiple solutions, no solutions, or you can't tell.      You will probably need to restate the theorems or think about how coefficient matrices are different to augmented matrices!   "
},
{
  "id": "sec_solving_linear_systems-2-36-3",
  "level": "2",
  "url": "sec_solving_linear_systems.html#sec_solving_linear_systems-2-36-3",
  "type": "Activity",
  "number": "2.10",
  "title": "",
  "body": "   List out all the possible ways two planes can intersect in a three dimensional space.  List out all the possible ways three planes can intersect in a three dimensional space.  List out all the possible ways four planes can intersect in a three dimensional space.  List out all the possible ways five planes can intersect in a three dimensional space.    "
},
{
  "id": "sec_solving_linear_systems-2-36-5",
  "level": "2",
  "url": "sec_solving_linear_systems.html#sec_solving_linear_systems-2-36-5",
  "type": "Question",
  "number": "2.11",
  "title": "",
  "body": " Why does the graph of a linear equation in variables need to be a flat dimensional hyperplane?  "
},
{
  "id": "sec_solving_linear_systems-2-36-10",
  "level": "2",
  "url": "sec_solving_linear_systems.html#sec_solving_linear_systems-2-36-10",
  "type": "Question",
  "number": "2.12",
  "title": "",
  "body": " Does your answer to make sense with this plot? Explain.  "
},
{
  "id": "sec_solving_linear_systems-2-36-11",
  "level": "2",
  "url": "sec_solving_linear_systems.html#sec_solving_linear_systems-2-36-11",
  "type": "Exercise",
  "number": "2.9",
  "title": "",
  "body": " For each of the systems in , use SageMath to draw a plot of each of the equations in the system and write a sentence for each system about why the plot and your answer to make sense.   You can edit the code block above and click the button again, and it will update the graph.  "
},
{
  "id": "sec_vector_matrix_eqns",
  "level": "1",
  "url": "sec_vector_matrix_eqns.html",
  "type": "Section",
  "number": "2.2",
  "title": "Vector and Matrix Equations",
  "body": " Vector and Matrix Equations  Recall that two vectors in are equal if and only if all of their components are equal.   Prove that the system of equations given by has the same set of solutions as the vector equation . In other words, prove that is a solution to the vector equation iff is a solution to the system of linear equations. Make sure you clearly connect the ideas in your proof and do not make an argument that these equations look similar.    Solve the following vector equation directly:     Give an example of a vector such that the equation has no solution or explain why no such vector exists.    Give an example of a vector such that the equation has exactly 1 solution or explain why no such vector exists.    Give an example of a vector such that the equation has exactly 1 solution or explain why no such vector exists.    Give an example of a vector such that the equation has no solutions or explain why no such vector exists.    Give an example of a vector such that the equation has exactly 1 solution or explain why no such vector exists.     A linear combination of a set is a vector of the form where and . Note that will not usually be in even though .     Can you write as a linear combination of and ? Justify your answer.    Repeat the previous problem for and .    Can you write as a linear combination of and ? Justify your answer.     We define a matrix-vector product as follows: If is a by matrix, and , then the matrix-vector product is given by  .     If is a by matrix, then for what value of ?   It should not surprise you that you can multiply a scalar multiple of a vector by a matrix by factoring out the scalar. In mathematical notation, . Additionally, you can apply the scalar multiplication to the matrix. In other words, . These kind of manipulations will be discussed more when we work with matrix operations later, but you may find these facts useful in your work right now. You should take time to write out the details of any of these arithmetic ideas that you think would be useful in your work.    Write out the -th component of the resulting vector of the product       How can you express the result of the matrix-vector product in terms of and the rows of ?   The -th component of the matrix-vector product is the dot product of row of with .    How can you express the result of the matrix-vector product in terms of and the columns of ?   One way to view this is as a linear combination of the columns of with the coefficient on the -th column of being .    Based on the above definition of the matrix vector product, if and , then by , has the same solution set as the system     Write each of the following as a matrix equation, a vector equation, and system of equations. You need to write out the exact corresponding vector equation, matrix equation, and system of equations, not some equivalent form.           "
},
{
  "id": "q41",
  "level": "2",
  "url": "sec_vector_matrix_eqns.html#q41",
  "type": "Question",
  "number": "2.13",
  "title": "",
  "body": " Prove that the system of equations given by has the same set of solutions as the vector equation . In other words, prove that is a solution to the vector equation iff is a solution to the system of linear equations. Make sure you clearly connect the ideas in your proof and do not make an argument that these equations look similar.  "
},
{
  "id": "sec_vector_matrix_eqns-4",
  "level": "2",
  "url": "sec_vector_matrix_eqns.html#sec_vector_matrix_eqns-4",
  "type": "Question",
  "number": "2.14",
  "title": "",
  "body": " Solve the following vector equation directly:   "
},
{
  "id": "sec_vector_matrix_eqns-5",
  "level": "2",
  "url": "sec_vector_matrix_eqns.html#sec_vector_matrix_eqns-5",
  "type": "Question",
  "number": "2.15",
  "title": "",
  "body": " Give an example of a vector such that the equation has no solution or explain why no such vector exists.  "
},
{
  "id": "sec_vector_matrix_eqns-6",
  "level": "2",
  "url": "sec_vector_matrix_eqns.html#sec_vector_matrix_eqns-6",
  "type": "Question",
  "number": "2.16",
  "title": "",
  "body": " Give an example of a vector such that the equation has exactly 1 solution or explain why no such vector exists.  "
},
{
  "id": "sec_vector_matrix_eqns-7",
  "level": "2",
  "url": "sec_vector_matrix_eqns.html#sec_vector_matrix_eqns-7",
  "type": "Question",
  "number": "2.17",
  "title": "",
  "body": " Give an example of a vector such that the equation has exactly 1 solution or explain why no such vector exists.  "
},
{
  "id": "sec_vector_matrix_eqns-8",
  "level": "2",
  "url": "sec_vector_matrix_eqns.html#sec_vector_matrix_eqns-8",
  "type": "Question",
  "number": "2.18",
  "title": "",
  "body": " Give an example of a vector such that the equation has no solutions or explain why no such vector exists.  "
},
{
  "id": "sec_vector_matrix_eqns-9",
  "level": "2",
  "url": "sec_vector_matrix_eqns.html#sec_vector_matrix_eqns-9",
  "type": "Question",
  "number": "2.19",
  "title": "",
  "body": " Give an example of a vector such that the equation has exactly 1 solution or explain why no such vector exists.  "
},
{
  "id": "sec_vector_matrix_eqns-10",
  "level": "2",
  "url": "sec_vector_matrix_eqns.html#sec_vector_matrix_eqns-10",
  "type": "Definition",
  "number": "2.10",
  "title": "",
  "body": "  A linear combination of a set is a vector of the form where and . Note that will not usually be in even though .   "
},
{
  "id": "sec_vector_matrix_eqns-11",
  "level": "2",
  "url": "sec_vector_matrix_eqns.html#sec_vector_matrix_eqns-11",
  "type": "Question",
  "number": "2.20",
  "title": "",
  "body": " Can you write as a linear combination of and ? Justify your answer.  "
},
{
  "id": "sec_vector_matrix_eqns-12",
  "level": "2",
  "url": "sec_vector_matrix_eqns.html#sec_vector_matrix_eqns-12",
  "type": "Question",
  "number": "2.21",
  "title": "",
  "body": " Repeat the previous problem for and .  "
},
{
  "id": "sec_vector_matrix_eqns-13",
  "level": "2",
  "url": "sec_vector_matrix_eqns.html#sec_vector_matrix_eqns-13",
  "type": "Question",
  "number": "2.22",
  "title": "",
  "body": " Can you write as a linear combination of and ? Justify your answer.  "
},
{
  "id": "sec_vector_matrix_eqns-14",
  "level": "2",
  "url": "sec_vector_matrix_eqns.html#sec_vector_matrix_eqns-14",
  "type": "Definition",
  "number": "2.11",
  "title": "",
  "body": "  We define a matrix-vector product as follows: If is a by matrix, and , then the matrix-vector product is given by  .   "
},
{
  "id": "sec_vector_matrix_eqns-15",
  "level": "2",
  "url": "sec_vector_matrix_eqns.html#sec_vector_matrix_eqns-15",
  "type": "Question",
  "number": "2.23",
  "title": "",
  "body": " If is a by matrix, then for what value of ?  "
},
{
  "id": "sec_vector_matrix_eqns-17",
  "level": "2",
  "url": "sec_vector_matrix_eqns.html#sec_vector_matrix_eqns-17",
  "type": "Question",
  "number": "2.24",
  "title": "",
  "body": "  Write out the -th component of the resulting vector of the product       How can you express the result of the matrix-vector product in terms of and the rows of ?   The -th component of the matrix-vector product is the dot product of row of with .    How can you express the result of the matrix-vector product in terms of and the columns of ?   One way to view this is as a linear combination of the columns of with the coefficient on the -th column of being .   "
},
{
  "id": "sec_vector_matrix_eqns-19",
  "level": "2",
  "url": "sec_vector_matrix_eqns.html#sec_vector_matrix_eqns-19",
  "type": "Question",
  "number": "2.25",
  "title": "",
  "body": "  Write each of the following as a matrix equation, a vector equation, and system of equations. You need to write out the exact corresponding vector equation, matrix equation, and system of equations, not some equivalent form.          "
},
{
  "id": "sec_soln_sets_lin_eqn",
  "level": "1",
  "url": "sec_soln_sets_lin_eqn.html",
  "type": "Section",
  "number": "2.3",
  "title": "Solution Sets of Linear Systems",
  "body": " Solution Sets of Linear Systems  In this section, we will talk about efficient and clear ways to express the set of solutions to a linear system of equations.  If a system of linear equations has two distinct solutions, then the system has infinitely many solutions.  For each of the systems in , use the reduced row echelon form to solve for each pivot (basic) variable in terms of the free variables and constant terms. By substituting in your new expressions for the pivot variables into the vector , you will get a vector solely in terms of the free variables. You can now write the solution set as a linear combination of vectors with each free variable as a coefficient. For instance, if a system had free variables and , then the parametric form would look like . This is called the parametric form of the solution set for the system, and is really a linear combination of the vectors , , and in the example.  Solve each of the following systems and present your solution set in parametric form.            A system of linear equations is homogeneous if the matrix form of the system, has . If , then the corresponding system is nonhomogeneous .    Using your answers to and as a guide, state and prove a theorem that discusses how the solution set to a homogeneous system is related to the solution set of the non-homogenous system.   State and prove a theorem that describes under what conditions of the matrix the system will have a solution for every . Essentially, you need to fill in the blank of the following statement: If , then will have a solution for every .    The column space of a matrix  , denoted is the set of vectors that can be written as a linear combination of the columns of . If is by , then .      The pivot columns of a matrix generate . This means that if , then can be written as a linear combination using only the pivot columns of .    Note that this theorem uses the pivot columns of and not the pivot columns of the echelon form of . Even though you need the echelon form to figure out which columns have pivots, you should use the appropriate columns of in your linear combination.    The null space of a matrix , denoted , is the set of vectors that when multiplied by the matrix give the zero vector. In other words, is the solution set of the homogeneous equation .    Let . Describe the sets and using a parametric form.  Let . Describe the sets and using a parametric form.  For matrices and , we will use the notation , which you produce in latex using A\\thicksim B in math mode, to denote that can be obtained from by performing a sequence of row operations.  Let What is the reduced row echelon form of ? You should use the information given above and not a lot of calculations.  Let Describe and using a parametric form using as few vectors as possible.  Under what conditions on a by matrix, , will be all of ?  Remember that and are usually very different sets, in fact, they aren't always in the same parent set. If is a by matrix, then is in and is in , for what values of and ?  Find an example of a by matrix where is the same set as .  Given a matrix with echelon form :   What is the minimum number of vectors that will be needed to give the parametric form of ?   What is the minimum number of vectors that will be needed to give the parametric form of ?  is a subset of for what value of ?  is a subset of for what value of ?   Given a matrix with echelon form :   What is the minimum number of vectors that will be needed to give the parametric form of ?  What is the minimum number of vectors that will be needed to give the parametric form of ?  is a subset of for what value of ?  is a subset of for what value of ?   Write a sentence to explain your answer to each part of the following question. Given a matrix , how many vectors will be needed to give the parametric form of      Can every vector in be written as a linear combination of the columns of ? Justify your answer.  "
},
{
  "id": "sec_soln_sets_lin_eqn-3",
  "level": "2",
  "url": "sec_soln_sets_lin_eqn.html#sec_soln_sets_lin_eqn-3",
  "type": "Theorem",
  "number": "2.12",
  "title": "",
  "body": "If a system of linear equations has two distinct solutions, then the system has infinitely many solutions. "
},
{
  "id": "q12",
  "level": "2",
  "url": "sec_soln_sets_lin_eqn.html#q12",
  "type": "Question",
  "number": "2.26",
  "title": "",
  "body": "For each of the systems in , use the reduced row echelon form to solve for each pivot (basic) variable in terms of the free variables and constant terms. By substituting in your new expressions for the pivot variables into the vector , you will get a vector solely in terms of the free variables. You can now write the solution set as a linear combination of vectors with each free variable as a coefficient. For instance, if a system had free variables and , then the parametric form would look like . This is called the parametric form of the solution set for the system, and is really a linear combination of the vectors , , and in the example. "
},
{
  "id": "q4",
  "level": "2",
  "url": "sec_soln_sets_lin_eqn.html#q4",
  "type": "Question",
  "number": "2.27",
  "title": "",
  "body": "Solve each of the following systems and present your solution set in parametric form.         "
},
{
  "id": "sec_soln_sets_lin_eqn-6",
  "level": "2",
  "url": "sec_soln_sets_lin_eqn.html#sec_soln_sets_lin_eqn-6",
  "type": "Definition",
  "number": "2.13",
  "title": "",
  "body": "  A system of linear equations is homogeneous if the matrix form of the system, has . If , then the corresponding system is nonhomogeneous .   "
},
{
  "id": "q7",
  "level": "2",
  "url": "sec_soln_sets_lin_eqn.html#q7",
  "type": "Question",
  "number": "2.28",
  "title": "",
  "body": "Using your answers to and as a guide, state and prove a theorem that discusses how the solution set to a homogeneous system is related to the solution set of the non-homogenous system. "
},
{
  "id": "sec_soln_sets_lin_eqn-8",
  "level": "2",
  "url": "sec_soln_sets_lin_eqn.html#sec_soln_sets_lin_eqn-8",
  "type": "Question",
  "number": "2.29",
  "title": "",
  "body": " State and prove a theorem that describes under what conditions of the matrix the system will have a solution for every . Essentially, you need to fill in the blank of the following statement: If , then will have a solution for every . "
},
{
  "id": "sec_soln_sets_lin_eqn-9",
  "level": "2",
  "url": "sec_soln_sets_lin_eqn.html#sec_soln_sets_lin_eqn-9",
  "type": "Definition",
  "number": "2.14",
  "title": "",
  "body": "  The column space of a matrix  , denoted is the set of vectors that can be written as a linear combination of the columns of . If is by , then .   "
},
{
  "id": "sec_soln_sets_lin_eqn-10",
  "level": "2",
  "url": "sec_soln_sets_lin_eqn.html#sec_soln_sets_lin_eqn-10",
  "type": "Theorem",
  "number": "2.15",
  "title": "",
  "body": "  The pivot columns of a matrix generate . This means that if , then can be written as a linear combination using only the pivot columns of .   "
},
{
  "id": "sec_soln_sets_lin_eqn-12",
  "level": "2",
  "url": "sec_soln_sets_lin_eqn.html#sec_soln_sets_lin_eqn-12",
  "type": "Definition",
  "number": "2.16",
  "title": "",
  "body": "  The null space of a matrix , denoted , is the set of vectors that when multiplied by the matrix give the zero vector. In other words, is the solution set of the homogeneous equation .   "
},
{
  "id": "sec_soln_sets_lin_eqn-13",
  "level": "2",
  "url": "sec_soln_sets_lin_eqn.html#sec_soln_sets_lin_eqn-13",
  "type": "Question",
  "number": "2.30",
  "title": "",
  "body": "Let . Describe the sets and using a parametric form. "
},
{
  "id": "sec_soln_sets_lin_eqn-14",
  "level": "2",
  "url": "sec_soln_sets_lin_eqn.html#sec_soln_sets_lin_eqn-14",
  "type": "Question",
  "number": "2.31",
  "title": "",
  "body": "Let . Describe the sets and using a parametric form. "
},
{
  "id": "sec_soln_sets_lin_eqn-16",
  "level": "2",
  "url": "sec_soln_sets_lin_eqn.html#sec_soln_sets_lin_eqn-16",
  "type": "Question",
  "number": "2.32",
  "title": "",
  "body": "Let What is the reduced row echelon form of ? You should use the information given above and not a lot of calculations. "
},
{
  "id": "sec_soln_sets_lin_eqn-17",
  "level": "2",
  "url": "sec_soln_sets_lin_eqn.html#sec_soln_sets_lin_eqn-17",
  "type": "Question",
  "number": "2.33",
  "title": "",
  "body": "Let Describe and using a parametric form using as few vectors as possible. "
},
{
  "id": "sec_soln_sets_lin_eqn-18",
  "level": "2",
  "url": "sec_soln_sets_lin_eqn.html#sec_soln_sets_lin_eqn-18",
  "type": "Question",
  "number": "2.34",
  "title": "",
  "body": "Under what conditions on a by matrix, , will be all of ? "
},
{
  "id": "sec_soln_sets_lin_eqn-20",
  "level": "2",
  "url": "sec_soln_sets_lin_eqn.html#sec_soln_sets_lin_eqn-20",
  "type": "Question",
  "number": "2.35",
  "title": "",
  "body": "Find an example of a by matrix where is the same set as . "
},
{
  "id": "sec_soln_sets_lin_eqn-21",
  "level": "2",
  "url": "sec_soln_sets_lin_eqn.html#sec_soln_sets_lin_eqn-21",
  "type": "Question",
  "number": "2.36",
  "title": "",
  "body": "Given a matrix with echelon form :   What is the minimum number of vectors that will be needed to give the parametric form of ?   What is the minimum number of vectors that will be needed to give the parametric form of ?  is a subset of for what value of ?  is a subset of for what value of ?  "
},
{
  "id": "sec_soln_sets_lin_eqn-22",
  "level": "2",
  "url": "sec_soln_sets_lin_eqn.html#sec_soln_sets_lin_eqn-22",
  "type": "Question",
  "number": "2.37",
  "title": "",
  "body": "Given a matrix with echelon form :   What is the minimum number of vectors that will be needed to give the parametric form of ?  What is the minimum number of vectors that will be needed to give the parametric form of ?  is a subset of for what value of ?  is a subset of for what value of ?  "
},
{
  "id": "q10",
  "level": "2",
  "url": "sec_soln_sets_lin_eqn.html#q10",
  "type": "Question",
  "number": "2.38",
  "title": "",
  "body": "Write a sentence to explain your answer to each part of the following question. Given a matrix , how many vectors will be needed to give the parametric form of     "
},
{
  "id": "sec_soln_sets_lin_eqn-24",
  "level": "2",
  "url": "sec_soln_sets_lin_eqn.html#sec_soln_sets_lin_eqn-24",
  "type": "Question",
  "number": "2.39",
  "title": "",
  "body": "Can every vector in be written as a linear combination of the columns of ? Justify your answer. "
},
{
  "id": "sec_matrix_ops",
  "level": "1",
  "url": "sec_matrix_ops.html",
  "type": "Section",
  "number": "2.4",
  "title": "Matrix Operations",
  "body": " Matrix Operations   Addition and Transposition    Finish the following sentences.    Vectors are equal if…    Matrices are equal if…    A scalar is…    Just as you can add two vectors in componentwise, you can add two matrices entry-wise. For this reason, it only makes sense to add two matrices if they are the same size. You can also define scalar multiplication of a matrix entry-wise.   Let , , and .   Is a scalar multiple of ? Why or why not?        Symbolically, and     Let be a by matrix. The transpose of , denoted , is a by matrix such that .    There are a couple of ways to think about the transpose. First, you can think about flipping the matrix across the main diagonal (the elements of the form ). You can also view the transpose of a matrix as switching the rows and columns (but preserving the order). In other words, the -th row of is the -th column of .   Let and                Let , , and .      If and are by matrices, then .    What dimensions should have in order to be able to add to ?   For all matrices , .   A matrix is symmetric if .  The sum of two symmetric by matrices is symmetric.   If is a symmetric matrix, then is symmetric.    Special Types of Matrices  A square matrix is a matrix that has the same number of rows and columns. A by matrix is said to be upper triangular if whenever . Similarly, a matrix is lower triangular if whenever . We usually consider square matrices when we talk about upper or lower triangular, but it may be helpful to consider non-square cases.  Give an example of a matrix that is upper triangular but is not in echelon form. If one does not exist, explain why.   Give an example of a matrix that is in echelon form but is not upper triangular. If one does not exist, explain why.   Can a matrix be upper and lower triangular? Either give an example or explain why there cannot exist one.   Diagonal matrices are matrices whose only nonzero entries are on the diagonal. Specifically, a matrix is diagonal if whenever .  Give an example of a matrix that is diagonal but not in echelon form.   The by  identity matrix , denoted , is the unique matrix such that for every . In fact the entries of are easily computed in terms of the Dirac delta function. Specifically , where   Write out and use it to prove that for any the product of and will always be .   Superstar Bonus Question Prove that is the only matrix that has the property from the problem above.     Matrix Multiplication  Earlier we saw how to multiply a by matrix by a vector from . We will discuss how to define matrix multiplication with multiple interpretations.  Let be an by matrix and let and be vectors from . Earlier we defined what and meant. If we build a by matrix using and as the columns, then we can define , read as times , to be The above definition is just distributing our matrix-vector product across the columns of . In a similar fashion, given any by matrix where is the -th column of , we can define In particular, this means that if makes sense, then we can calculate just the -th column of without calculating all of . Namely, the -th column of is , which is written symbolically as .  Formally, we can define the product of a by matrix with a by matrix to be the by matrix such that  This formula looks difficult, but what it really tells us is that the entry of is really the dot product of the -th row of with the -th column of . Remember the dot product of and is just the sum of the products of the components. Namely, This idea lets us calculate the matrix product one entry at a time. Continuing this idea will lead us to see that the -th row of the product can be calculated as .  Note that in general , even when both products make sense.  What sizes of matrices can you add to a by matrix?  What sizes of matrices can you multiply on the right of a by matrix?  What sizes of matrices can you multiply on the left of a by matrix?  If , when does it make sense to multiply by ?   Let and .   What is the size of ?  Compute just the first column of .  Write the first column of as a linear combination of the columns of A. Be sure to check your work.  Solve the matrix equation  Compute just the second row of   Let and         Let and . Compute and .   Let and . Compute and .   You can approach proving the following theorem by showing matrix equality entry-wise or column-wise or row-wise.  For all matrices , , and such that the addition and multiplication of matrices below makes sense, .   Give 2 different examples of 3 by 3 matrices and such that .   Give 2 different examples of 3 by 3 matrices and such that .   For all matrices such that is defined, .    "
},
{
  "id": "sec_matrix_ops-2-2",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-2-2",
  "type": "Question",
  "number": "2.40",
  "title": "",
  "body": "  Finish the following sentences.    Vectors are equal if…    Matrices are equal if…    A scalar is…   "
},
{
  "id": "sec_matrix_ops-2-4",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-2-4",
  "type": "Question",
  "number": "2.41",
  "title": "",
  "body": " Let , , and .   Is a scalar multiple of ? Why or why not?      "
},
{
  "id": "sec_matrix_ops-2-5",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-2-5",
  "type": "Question",
  "number": "2.42",
  "title": "",
  "body": " Symbolically, and  "
},
{
  "id": "sec_matrix_ops-2-6",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-2-6",
  "type": "Definition",
  "number": "2.17",
  "title": "",
  "body": "  Let be a by matrix. The transpose of , denoted , is a by matrix such that .   "
},
{
  "id": "sec_matrix_ops-2-8",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-2-8",
  "type": "Question",
  "number": "2.43",
  "title": "",
  "body": " Let and               "
},
{
  "id": "sec_matrix_ops-2-9",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-2-9",
  "type": "Question",
  "number": "2.44",
  "title": "",
  "body": "Let , , and .     "
},
{
  "id": "sec_matrix_ops-2-10",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-2-10",
  "type": "Theorem",
  "number": "2.18",
  "title": "",
  "body": "If and are by matrices, then .  "
},
{
  "id": "sec_matrix_ops-2-11",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-2-11",
  "type": "Question",
  "number": "2.45",
  "title": "",
  "body": " What dimensions should have in order to be able to add to ?  "
},
{
  "id": "sec_matrix_ops-2-12",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-2-12",
  "type": "Theorem",
  "number": "2.19",
  "title": "",
  "body": "For all matrices , .  "
},
{
  "id": "sec_matrix_ops-2-13",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-2-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "symmetric "
},
{
  "id": "sec_matrix_ops-2-14",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-2-14",
  "type": "Theorem",
  "number": "2.20",
  "title": "",
  "body": "The sum of two symmetric by matrices is symmetric.  "
},
{
  "id": "sec_matrix_ops-2-15",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-2-15",
  "type": "Theorem",
  "number": "2.21",
  "title": "",
  "body": "If is a symmetric matrix, then is symmetric. "
},
{
  "id": "sec_matrix_ops-3-2",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "square upper triangular lower triangular "
},
{
  "id": "sec_matrix_ops-3-3",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-3-3",
  "type": "Question",
  "number": "2.46",
  "title": "",
  "body": "Give an example of a matrix that is upper triangular but is not in echelon form. If one does not exist, explain why.  "
},
{
  "id": "sec_matrix_ops-3-4",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-3-4",
  "type": "Question",
  "number": "2.47",
  "title": "",
  "body": "Give an example of a matrix that is in echelon form but is not upper triangular. If one does not exist, explain why.  "
},
{
  "id": "sec_matrix_ops-3-5",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-3-5",
  "type": "Question",
  "number": "2.48",
  "title": "",
  "body": "Can a matrix be upper and lower triangular? Either give an example or explain why there cannot exist one.  "
},
{
  "id": "sec_matrix_ops-3-6",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-3-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Diagonal "
},
{
  "id": "sec_matrix_ops-3-7",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-3-7",
  "type": "Question",
  "number": "2.49",
  "title": "",
  "body": "Give an example of a matrix that is diagonal but not in echelon form.  "
},
{
  "id": "sec_matrix_ops-3-8",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-3-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "identity matrix "
},
{
  "id": "sec_matrix_ops-3-9",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-3-9",
  "type": "Question",
  "number": "2.50",
  "title": "",
  "body": "Write out and use it to prove that for any the product of and will always be .  "
},
{
  "id": "sec_matrix_ops-3-10",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-3-10",
  "type": "Question",
  "number": "2.51",
  "title": "Superstar Bonus Question.",
  "body": "Superstar Bonus Question Prove that is the only matrix that has the property from the problem above.  "
},
{
  "id": "sec_matrix_ops-4-5",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-4-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dot product "
},
{
  "id": "sec_matrix_ops-4-7",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-4-7",
  "type": "Question",
  "number": "2.52",
  "title": "",
  "body": "What sizes of matrices can you add to a by matrix?  What sizes of matrices can you multiply on the right of a by matrix?  What sizes of matrices can you multiply on the left of a by matrix? "
},
{
  "id": "sec_matrix_ops-4-8",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-4-8",
  "type": "Question",
  "number": "2.53",
  "title": "",
  "body": "If , when does it make sense to multiply by ?  "
},
{
  "id": "sec_matrix_ops-4-9",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-4-9",
  "type": "Question",
  "number": "2.54",
  "title": "",
  "body": "Let and .   What is the size of ?  Compute just the first column of .  Write the first column of as a linear combination of the columns of A. Be sure to check your work.  Solve the matrix equation  Compute just the second row of  "
},
{
  "id": "sec_matrix_ops-4-10",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-4-10",
  "type": "Question",
  "number": "2.55",
  "title": "",
  "body": "Let and        "
},
{
  "id": "sec_matrix_ops-4-11",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-4-11",
  "type": "Question",
  "number": "2.56",
  "title": "",
  "body": "Let and . Compute and .  "
},
{
  "id": "sec_matrix_ops-4-12",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-4-12",
  "type": "Question",
  "number": "2.57",
  "title": "",
  "body": "Let and . Compute and .  "
},
{
  "id": "sec_matrix_ops-4-14",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-4-14",
  "type": "Theorem",
  "number": "2.22",
  "title": "",
  "body": "For all matrices , , and such that the addition and multiplication of matrices below makes sense, .  "
},
{
  "id": "sec_matrix_ops-4-15",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-4-15",
  "type": "Question",
  "number": "2.58",
  "title": "",
  "body": "Give 2 different examples of 3 by 3 matrices and such that .  "
},
{
  "id": "sec_matrix_ops-4-16",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-4-16",
  "type": "Question",
  "number": "2.59",
  "title": "",
  "body": "Give 2 different examples of 3 by 3 matrices and such that . "
},
{
  "id": "sec_matrix_ops-4-17",
  "level": "2",
  "url": "sec_matrix_ops.html#sec_matrix_ops-4-17",
  "type": "Theorem",
  "number": "2.23",
  "title": "",
  "body": " For all matrices such that is defined, .  "
},
{
  "id": "ch_vector_spaces-2",
  "level": "1",
  "url": "ch_vector_spaces-2.html",
  "type": "Section",
  "number": "3.1",
  "title": "Definitions",
  "body": " Definitions  Vector spaces are the primary objects that we study in linear algebra. Generally speaking, a vector space is a collection of objects (called vectors) that preserves linear relationships; that is, the objects work well under vector addition and scalar multiplication. As you will see shortly, vectors are not always going to be the column vectors we have seen so far or viewed geometrically as arrows from one point to another.    A vector space , , is a nonempty set of objects called vectors with two operations called addition and scalar multiplication such that the following hold for all and :  If , then .      There exists a vector such that .  For each , there is a vector such that .  If and , then .          You can refer to these properties as  closure of vector addition  commutativity of vector addition  associativity of vector addition  existence of the zero vector  existence of the additive inverse  closure of scalar multiplication  distributive property of scalar multiplication across vector addition  distributive property of scalar addition across scalar multiplication (of a vector)  associativity of scalar multiplication  existence of scalar multiplicative identity      This is the definition for a real vector space since the scalars come from , the real numbers. Sometimes it will be useful for us to consider complex vector spaces (scalars come from ), but unless otherwise stated, you should assume that you are working with a real vector space.  In order to gain an appreciation of definitions, use only the above definition to prove the following results:  The zero vector is unique. You can begin this by supposing that there exists some such that for every , then you need to show that must equal .  The additive inverse of a vector is unique.    The real numbers, , are a vector space since all of the above properties hold.    Real valued vectors, , are a vector space since all of the above properties hold when vector addition and scalar multiplication are done componentwise. We can think of the vectors in as a directed line segment (an arrow) or as a point in -dimensional space.   Show why , the set of vectors with integer components is not a vector space.  Is a real vector space? Why or why not?  Is a complex vector space? Why or why not?  The set of by matrices over the real numbers, or simply , is a vector space since all of the above properties hold when vector addition and scalar multiplication are done entry wise. The quotes are around vector in the previous sentence because you may not always think of matrices as being vectors but using the properties from , you can treat matrices as vectors in the general sense.  The set of polynomials (in variable ) of degree at most is denoted by .    Is ?    Is ?    Is ?    Write as a set using set builder notation. Be sure you have a statement that you can use to verify if an object is in your set or not.    Prove that is a real vector space.    The following sets are also vector spaces:  The set of all polynomials (in variable ) denoted .   , the set of functions from a set to the real numbers. We will take a closer look at this vector space in the next problem.   , the trivial vector space .     We are going to take a look at the vector space to get used to our more general way of thinking about vectors and vector spaces. You should think of the vector space as the set of functions with domain and codomain . In other words, we are looking at the set of functions that only use , , and as inputs and have outputs of real numbers.  Let be the function that takes , , and to , , and respectively.  Let be the function that takes , , and to , , and respectively.  Let be the function that takes , , and to , , and respectively.  Let be the function that takes , , and to , , and respectively.        Fill in the blank:   Fill in the blank:  Fill in the blank:      Does it make sense to add the inputs of these functions? Explain.    Does it make sense to add the outputs of these functions? Explain.    Let be the function that takes , , and to , , and respectively. Is ?    Describe the function . In other words, give the outputs for all possible inputs and write a sentence about how you built in terms of and .    Describe the function .    What function when added to will give ?    Can you write as a linear combination of the set ? Explain why or why not.    Can you write as a linear combination of the set ? Explain why or why not.      Write a sentence or two about what property makes a vector the zero vector for , called .    What is the zero vector for the vector space ? Remember to state your answer as an element of .    What is the zero vector for the vector space ? Remember to state your answer as an element of .    What is the zero vector for the vector space ? Remember to state your answer as an element of .    What is the zero vector for the vector space ? Remember to state your answer as an element of .    "
},
{
  "id": "ch_vector_spaces-2-3",
  "level": "2",
  "url": "ch_vector_spaces-2.html#ch_vector_spaces-2-3",
  "type": "Definition",
  "number": "3.1",
  "title": "",
  "body": "  A vector space , , is a nonempty set of objects called vectors with two operations called addition and scalar multiplication such that the following hold for all and :  If , then .      There exists a vector such that .  For each , there is a vector such that .  If and , then .          You can refer to these properties as  closure of vector addition  commutativity of vector addition  associativity of vector addition  existence of the zero vector  existence of the additive inverse  closure of scalar multiplication  distributive property of scalar multiplication across vector addition  distributive property of scalar addition across scalar multiplication (of a vector)  associativity of scalar multiplication  existence of scalar multiplicative identity     "
},
{
  "id": "ch_vector_spaces-2-5",
  "level": "2",
  "url": "ch_vector_spaces-2.html#ch_vector_spaces-2-5",
  "type": "Question",
  "number": "3.1",
  "title": "",
  "body": "In order to gain an appreciation of definitions, use only the above definition to prove the following results:  The zero vector is unique. You can begin this by supposing that there exists some such that for every , then you need to show that must equal .  The additive inverse of a vector is unique.  "
},
{
  "id": "ch_vector_spaces-2-6",
  "level": "2",
  "url": "ch_vector_spaces-2.html#ch_vector_spaces-2-6",
  "type": "Example",
  "number": "3.2",
  "title": "",
  "body": " The real numbers, , are a vector space since all of the above properties hold.  "
},
{
  "id": "ch_vector_spaces-2-7",
  "level": "2",
  "url": "ch_vector_spaces-2.html#ch_vector_spaces-2-7",
  "type": "Example",
  "number": "3.3",
  "title": "",
  "body": " Real valued vectors, , are a vector space since all of the above properties hold when vector addition and scalar multiplication are done componentwise. We can think of the vectors in as a directed line segment (an arrow) or as a point in -dimensional space.  "
},
{
  "id": "ch_vector_spaces-2-8",
  "level": "2",
  "url": "ch_vector_spaces-2.html#ch_vector_spaces-2-8",
  "type": "Question",
  "number": "3.2",
  "title": "",
  "body": "Show why , the set of vectors with integer components is not a vector space. "
},
{
  "id": "ch_vector_spaces-2-9",
  "level": "2",
  "url": "ch_vector_spaces-2.html#ch_vector_spaces-2-9",
  "type": "Question",
  "number": "3.3",
  "title": "",
  "body": "Is a real vector space? Why or why not? "
},
{
  "id": "ch_vector_spaces-2-10",
  "level": "2",
  "url": "ch_vector_spaces-2.html#ch_vector_spaces-2-10",
  "type": "Question",
  "number": "3.4",
  "title": "",
  "body": "Is a complex vector space? Why or why not? "
},
{
  "id": "ch_vector_spaces-2-11",
  "level": "2",
  "url": "ch_vector_spaces-2.html#ch_vector_spaces-2-11",
  "type": "Example",
  "number": "3.4",
  "title": "",
  "body": "The set of by matrices over the real numbers, or simply , is a vector space since all of the above properties hold when vector addition and scalar multiplication are done entry wise. The quotes are around vector in the previous sentence because you may not always think of matrices as being vectors but using the properties from , you can treat matrices as vectors in the general sense. "
},
{
  "id": "vse",
  "level": "2",
  "url": "ch_vector_spaces-2.html#vse",
  "type": "Question",
  "number": "3.5",
  "title": "",
  "body": "The set of polynomials (in variable ) of degree at most is denoted by .    Is ?    Is ?    Is ?    Write as a set using set builder notation. Be sure you have a statement that you can use to verify if an object is in your set or not.    Prove that is a real vector space.   "
},
{
  "id": "ch_vector_spaces-2-13",
  "level": "2",
  "url": "ch_vector_spaces-2.html#ch_vector_spaces-2-13",
  "type": "Example",
  "number": "3.5",
  "title": "",
  "body": "The following sets are also vector spaces:  The set of all polynomials (in variable ) denoted .   , the set of functions from a set to the real numbers. We will take a closer look at this vector space in the next problem.   , the trivial vector space .  "
},
{
  "id": "ch_vector_spaces-2-14",
  "level": "2",
  "url": "ch_vector_spaces-2.html#ch_vector_spaces-2-14",
  "type": "Question",
  "number": "3.6",
  "title": "",
  "body": "  We are going to take a look at the vector space to get used to our more general way of thinking about vectors and vector spaces. You should think of the vector space as the set of functions with domain and codomain . In other words, we are looking at the set of functions that only use , , and as inputs and have outputs of real numbers.  Let be the function that takes , , and to , , and respectively.  Let be the function that takes , , and to , , and respectively.  Let be the function that takes , , and to , , and respectively.  Let be the function that takes , , and to , , and respectively.        Fill in the blank:   Fill in the blank:  Fill in the blank:      Does it make sense to add the inputs of these functions? Explain.    Does it make sense to add the outputs of these functions? Explain.    Let be the function that takes , , and to , , and respectively. Is ?    Describe the function . In other words, give the outputs for all possible inputs and write a sentence about how you built in terms of and .    Describe the function .    What function when added to will give ?    Can you write as a linear combination of the set ? Explain why or why not.    Can you write as a linear combination of the set ? Explain why or why not.   "
},
{
  "id": "ch_vector_spaces-2-15",
  "level": "2",
  "url": "ch_vector_spaces-2.html#ch_vector_spaces-2-15",
  "type": "Question",
  "number": "3.7",
  "title": "",
  "body": "  Write a sentence or two about what property makes a vector the zero vector for , called .    What is the zero vector for the vector space ? Remember to state your answer as an element of .    What is the zero vector for the vector space ? Remember to state your answer as an element of .    What is the zero vector for the vector space ? Remember to state your answer as an element of .    What is the zero vector for the vector space ? Remember to state your answer as an element of .   "
},
{
  "id": "ch_vector_spaces-3",
  "level": "1",
  "url": "ch_vector_spaces-3.html",
  "type": "Section",
  "number": "3.2",
  "title": "Subspaces",
  "body": " Subspaces  As shows, it can be very tedious to prove that a set is indeed a vector space. A subspace of a vector space is a subset that is itself a vector space. Since most of the properties of the vector spaces we look at get inherited from some larger vector space, it is often easier to show that a set is a vector space by showing it is a subspace of the appropriate parent vector space.    A subset of a vector space is a subspace if and only if the following are true:  The zero vector of is in ; .  H is closed under vector addition; if , then .  H is closed under scalar multiplication; if and , then .      We first assume that is a subspace of . Item (a) of the theorem follows from axiom 4 of being a vector space. Item (b) of the theorem follows from axiom 1 of being a vector space. Item (c) of the theorem follows from axiom 6 of being a vector space.  For the converse, we assume that and the three items of the theorem satement are satisfied. We must verify the 10 vector space axioms:  This follows from item (b) of the theorem statement.  Since and this axiom holds for all elements of , the axiom holds when restricted to elements of .  Since and this axiom holds for all elements of , the axiom holds when restricted to elements of .  This follows from item (a) of the theorem statement.  This requires proof. Since , item (c) of the theorem statement tells us that for all , . Thus, this axiom is verified.  This follows from item (c) of the theorem statement.  Since and this axiom holds for all elements of , the axiom holds when restricted to elements of .  Since and this axiom holds for all elements of , the axiom holds when restricted to elements of .  Since and this axiom holds for all elements of , the axiom holds when restricted to elements of .  Since and this axiom holds for all elements of , the axiom holds when restricted to elements of .     This theorem is so useful because we can prove a set is a vector space by checking only three properties instead of the ten that are involved in the definition. The reason that we do not need to check these other properties is that by using this subspace, we already have proven the proper rules of arithmetic from the parent space. Additionally, since we are using the same rules for scalar multiplication and vector addition as the parent space, we must also have the same scalars as the parent space.  Use the preceding theorem to prove that is a subspace of .   Is a subspace of ? Why or why not?  Is a subspace of ? Why or why not?  Is the set of points on the plane given by a subspace of ? Why or why not?  Is the set of points on the plane given by a subspace of ? Why or why not?  Draw a plot of the points in given by . Is a subspace of ? Why or why not?  Is , the set of symmetric by matrices a subspace of ? Why or why not?  Prove or disprove: The set of odd functions on (i.e., those for which for every ) a subspace of .   The statement is true. We use Theorem 3.6 to prove this. First note that the function is the zero vector for this vector space, as for any function , . To see that is odd, we have . Now suppose that are odd functions. We have , verifying the second part of the theorem is satisfied. Finally, let . Now . Thus, the set of odd functions are a subspace of the vector space of functions from to .   If is a by matrix, the solution set to the homogeneous equation is a subspace of .  If and are subspaces of some vector space , then the set is a subspace of as well.  Prove or Disprove: the set of by matrices with at least one zero entry is a subspace of .  Prove or Disprove: the set of matrices of the form is a subspace of .  Prove or disprove: The set of quadratic polynomials of the form is a subspace of the vector space of polynomials.  "
},
{
  "id": "ch_vector_spaces-3-2",
  "level": "2",
  "url": "ch_vector_spaces-3.html#ch_vector_spaces-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "subspace "
},
{
  "id": "ch_vector_spaces-3-3",
  "level": "2",
  "url": "ch_vector_spaces-3.html#ch_vector_spaces-3-3",
  "type": "Theorem",
  "number": "3.6",
  "title": "",
  "body": "  A subset of a vector space is a subspace if and only if the following are true:  The zero vector of is in ; .  H is closed under vector addition; if , then .  H is closed under scalar multiplication; if and , then .      We first assume that is a subspace of . Item (a) of the theorem follows from axiom 4 of being a vector space. Item (b) of the theorem follows from axiom 1 of being a vector space. Item (c) of the theorem follows from axiom 6 of being a vector space.  For the converse, we assume that and the three items of the theorem satement are satisfied. We must verify the 10 vector space axioms:  This follows from item (b) of the theorem statement.  Since and this axiom holds for all elements of , the axiom holds when restricted to elements of .  Since and this axiom holds for all elements of , the axiom holds when restricted to elements of .  This follows from item (a) of the theorem statement.  This requires proof. Since , item (c) of the theorem statement tells us that for all , . Thus, this axiom is verified.  This follows from item (c) of the theorem statement.  Since and this axiom holds for all elements of , the axiom holds when restricted to elements of .  Since and this axiom holds for all elements of , the axiom holds when restricted to elements of .  Since and this axiom holds for all elements of , the axiom holds when restricted to elements of .  Since and this axiom holds for all elements of , the axiom holds when restricted to elements of .    "
},
{
  "id": "ch_vector_spaces-3-5",
  "level": "2",
  "url": "ch_vector_spaces-3.html#ch_vector_spaces-3-5",
  "type": "Question",
  "number": "3.8",
  "title": "",
  "body": "Use the preceding theorem to prove that is a subspace of .  "
},
{
  "id": "ch_vector_spaces-3-6",
  "level": "2",
  "url": "ch_vector_spaces-3.html#ch_vector_spaces-3-6",
  "type": "Question",
  "number": "3.9",
  "title": "",
  "body": "Is a subspace of ? Why or why not? "
},
{
  "id": "ch_vector_spaces-3-7",
  "level": "2",
  "url": "ch_vector_spaces-3.html#ch_vector_spaces-3-7",
  "type": "Question",
  "number": "3.10",
  "title": "",
  "body": "Is a subspace of ? Why or why not? "
},
{
  "id": "ch_vector_spaces-3-8",
  "level": "2",
  "url": "ch_vector_spaces-3.html#ch_vector_spaces-3-8",
  "type": "Question",
  "number": "3.11",
  "title": "",
  "body": "Is the set of points on the plane given by a subspace of ? Why or why not? "
},
{
  "id": "ch_vector_spaces-3-9",
  "level": "2",
  "url": "ch_vector_spaces-3.html#ch_vector_spaces-3-9",
  "type": "Question",
  "number": "3.12",
  "title": "",
  "body": "Is the set of points on the plane given by a subspace of ? Why or why not? "
},
{
  "id": "ch_vector_spaces-3-10",
  "level": "2",
  "url": "ch_vector_spaces-3.html#ch_vector_spaces-3-10",
  "type": "Question",
  "number": "3.13",
  "title": "",
  "body": "Draw a plot of the points in given by . Is a subspace of ? Why or why not? "
},
{
  "id": "ch_vector_spaces-3-11",
  "level": "2",
  "url": "ch_vector_spaces-3.html#ch_vector_spaces-3-11",
  "type": "Question",
  "number": "3.14",
  "title": "",
  "body": "Is , the set of symmetric by matrices a subspace of ? Why or why not? "
},
{
  "id": "ch_vector_spaces-3-12",
  "level": "2",
  "url": "ch_vector_spaces-3.html#ch_vector_spaces-3-12",
  "type": "Question",
  "number": "3.15",
  "title": "",
  "body": "Prove or disprove: The set of odd functions on (i.e., those for which for every ) a subspace of .   The statement is true. We use Theorem 3.6 to prove this. First note that the function is the zero vector for this vector space, as for any function , . To see that is odd, we have . Now suppose that are odd functions. We have , verifying the second part of the theorem is satisfied. Finally, let . Now . Thus, the set of odd functions are a subspace of the vector space of functions from to .  "
},
{
  "id": "ch_vector_spaces-3-13",
  "level": "2",
  "url": "ch_vector_spaces-3.html#ch_vector_spaces-3-13",
  "type": "Theorem",
  "number": "3.7",
  "title": "",
  "body": "If is a by matrix, the solution set to the homogeneous equation is a subspace of . "
},
{
  "id": "ch_vector_spaces-3-14",
  "level": "2",
  "url": "ch_vector_spaces-3.html#ch_vector_spaces-3-14",
  "type": "Theorem",
  "number": "3.8",
  "title": "",
  "body": "If and are subspaces of some vector space , then the set is a subspace of as well. "
},
{
  "id": "ch_vector_spaces-3-15",
  "level": "2",
  "url": "ch_vector_spaces-3.html#ch_vector_spaces-3-15",
  "type": "Question",
  "number": "3.16",
  "title": "",
  "body": "Prove or Disprove: the set of by matrices with at least one zero entry is a subspace of . "
},
{
  "id": "ch_vector_spaces-3-16",
  "level": "2",
  "url": "ch_vector_spaces-3.html#ch_vector_spaces-3-16",
  "type": "Question",
  "number": "3.17",
  "title": "",
  "body": "Prove or Disprove: the set of matrices of the form is a subspace of . "
},
{
  "id": "ch_vector_spaces-3-17",
  "level": "2",
  "url": "ch_vector_spaces-3.html#ch_vector_spaces-3-17",
  "type": "Question",
  "number": "3.18",
  "title": "",
  "body": "Prove or disprove: The set of quadratic polynomials of the form is a subspace of the vector space of polynomials. "
},
{
  "id": "ch_vector_spaces-4",
  "level": "1",
  "url": "ch_vector_spaces-4.html",
  "type": "Section",
  "number": "3.3",
  "title": "Span",
  "body": " Span  Recall that a linear combination of the set is a vector of the form . Note that some of the may be zero. In other words, not every vector in a set needs to be part of a linear combination from that set.  Find a way to write as a linear combination of and or explain why it is not possible to do so?    Repeat the previous problem for , , and .   Can you write as a linear combination of and ?    Can you write as a linear combination of and ?    The span of a set of vectors , denoted is the set of all possible linear combinations of . A set is said to span or generate a vector space  if .  If , is ?    If , is ?   If , is ?    If , is ?    Is in the span of ?    For what value(s) of and is a solution to if and ?   Is in the span of the set of columns of ? If so, what are the coefficients?    Let be a vector space. If is a set of vectors from , then is a subspace of .    Find a finite set of vectors that generates each of the following vector spaces (be sure to show why your set works):                Show that the set spans all of .   Come up with a system of equations that you will need to solve and use your theorems from earlier chapters.    Geometrically describe the span of .    Geometrically describe the span of .    Does the span of have to go through the origin?  Does the span of where have to go through the origin?    "
},
{
  "id": "ch_vector_spaces-4-2",
  "level": "2",
  "url": "ch_vector_spaces-4.html#ch_vector_spaces-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear combination "
},
{
  "id": "ch_vector_spaces-4-3",
  "level": "2",
  "url": "ch_vector_spaces-4.html#ch_vector_spaces-4-3",
  "type": "Question",
  "number": "3.19",
  "title": "",
  "body": "Find a way to write as a linear combination of and or explain why it is not possible to do so?   "
},
{
  "id": "ch_vector_spaces-4-4",
  "level": "2",
  "url": "ch_vector_spaces-4.html#ch_vector_spaces-4-4",
  "type": "Exercise",
  "number": "3.9",
  "title": "",
  "body": "Repeat the previous problem for , , and .  "
},
{
  "id": "ch_vector_spaces-4-5",
  "level": "2",
  "url": "ch_vector_spaces-4.html#ch_vector_spaces-4-5",
  "type": "Question",
  "number": "3.20",
  "title": "",
  "body": "Can you write as a linear combination of and ?   "
},
{
  "id": "ch_vector_spaces-4-6",
  "level": "2",
  "url": "ch_vector_spaces-4.html#ch_vector_spaces-4-6",
  "type": "Question",
  "number": "3.21",
  "title": "",
  "body": "Can you write as a linear combination of and ?   "
},
{
  "id": "ch_vector_spaces-4-7",
  "level": "2",
  "url": "ch_vector_spaces-4.html#ch_vector_spaces-4-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "span span or generate a vector space "
},
{
  "id": "ch_vector_spaces-4-8",
  "level": "2",
  "url": "ch_vector_spaces-4.html#ch_vector_spaces-4-8",
  "type": "Question",
  "number": "3.22",
  "title": "",
  "body": "If , is ?   "
},
{
  "id": "ch_vector_spaces-4-9",
  "level": "2",
  "url": "ch_vector_spaces-4.html#ch_vector_spaces-4-9",
  "type": "Exercise",
  "number": "3.10",
  "title": "",
  "body": "If , is ?  "
},
{
  "id": "ch_vector_spaces-4-10",
  "level": "2",
  "url": "ch_vector_spaces-4.html#ch_vector_spaces-4-10",
  "type": "Question",
  "number": "3.23",
  "title": "",
  "body": "If , is ?   "
},
{
  "id": "ch_vector_spaces-4-11",
  "level": "2",
  "url": "ch_vector_spaces-4.html#ch_vector_spaces-4-11",
  "type": "Question",
  "number": "3.24",
  "title": "",
  "body": "If , is ?   "
},
{
  "id": "ch_vector_spaces-4-12",
  "level": "2",
  "url": "ch_vector_spaces-4.html#ch_vector_spaces-4-12",
  "type": "Question",
  "number": "3.25",
  "title": "",
  "body": "Is in the span of ?   "
},
{
  "id": "ch_vector_spaces-4-13",
  "level": "2",
  "url": "ch_vector_spaces-4.html#ch_vector_spaces-4-13",
  "type": "Exercise",
  "number": "3.11",
  "title": "",
  "body": "For what value(s) of and is a solution to if and ?  "
},
{
  "id": "ch_vector_spaces-4-14",
  "level": "2",
  "url": "ch_vector_spaces-4.html#ch_vector_spaces-4-14",
  "type": "Question",
  "number": "3.26",
  "title": "",
  "body": "Is in the span of the set of columns of ? If so, what are the coefficients?   "
},
{
  "id": "ch_vector_spaces-4-15",
  "level": "2",
  "url": "ch_vector_spaces-4.html#ch_vector_spaces-4-15",
  "type": "Theorem",
  "number": "3.12",
  "title": "",
  "body": "Let be a vector space. If is a set of vectors from , then is a subspace of .   "
},
{
  "id": "ch_vector_spaces-4-16",
  "level": "2",
  "url": "ch_vector_spaces-4.html#ch_vector_spaces-4-16",
  "type": "Question",
  "number": "3.27",
  "title": "",
  "body": "Find a finite set of vectors that generates each of the following vector spaces (be sure to show why your set works):               "
},
{
  "id": "ch_vector_spaces-4-17",
  "level": "2",
  "url": "ch_vector_spaces-4.html#ch_vector_spaces-4-17",
  "type": "Question",
  "number": "3.28",
  "title": "",
  "body": "Show that the set spans all of .   Come up with a system of equations that you will need to solve and use your theorems from earlier chapters.   "
},
{
  "id": "ch_vector_spaces-4-18",
  "level": "2",
  "url": "ch_vector_spaces-4.html#ch_vector_spaces-4-18",
  "type": "Question",
  "number": "3.29",
  "title": "",
  "body": "Geometrically describe the span of .   "
},
{
  "id": "ch_vector_spaces-4-19",
  "level": "2",
  "url": "ch_vector_spaces-4.html#ch_vector_spaces-4-19",
  "type": "Question",
  "number": "3.30",
  "title": "",
  "body": "Geometrically describe the span of .   "
},
{
  "id": "ch_vector_spaces-4-20",
  "level": "2",
  "url": "ch_vector_spaces-4.html#ch_vector_spaces-4-20",
  "type": "Question",
  "number": "3.31",
  "title": "",
  "body": "Does the span of have to go through the origin? "
},
{
  "id": "ch_vector_spaces-4-21",
  "level": "2",
  "url": "ch_vector_spaces-4.html#ch_vector_spaces-4-21",
  "type": "Question",
  "number": "3.32",
  "title": "",
  "body": "Does the span of where have to go through the origin?   "
},
{
  "id": "ch_vector_spaces-5",
  "level": "1",
  "url": "ch_vector_spaces-5.html",
  "type": "Section",
  "number": "3.4",
  "title": "Linear Independence",
  "body": " Linear Independence    A set of vectors is linearly independent if the only linear combination of elements of that equals the zero vector is the trivial linear combination. In other words, being a linear independent set implies that if where , then all .  A set of vectors is linearly dependent if the set is not linearly independent. More specifically, there exists a solution to where and at least one of the .    Is the set linearly independent?    Is the set linearly independent?    Choose a vector so that the set is linearly independent, where .  Is your choice of in ? Show why or why not.   Is a linearly dependent set in ?    Is a linearly independent set in ?   Prove that is linearly independent.   If a set of a vector space contains , then is linearly dependent.    If is a by matrix, then the columns of A form a linearly independent set if and only if has pivot columns. Completely justify your response.    If is linearly independent, then any subset of is linearly independent.    Prove or disprove: If is linearly dependent, then any subset of is linearly dependent.    If is in the span of , then is linearly dependent.     The following two theorems are a wonderful summary of the difference between and the importance of linear dependence and linear independence.  If is a linearly dependent set, then any can be written as a linear combination from in more than one way.    If is a linearly independent set, then any can be written as a linear combination from in only one way.    "
},
{
  "id": "ch_vector_spaces-5-2",
  "level": "2",
  "url": "ch_vector_spaces-5.html#ch_vector_spaces-5-2",
  "type": "Definition",
  "number": "3.13",
  "title": "",
  "body": "  A set of vectors is linearly independent if the only linear combination of elements of that equals the zero vector is the trivial linear combination. In other words, being a linear independent set implies that if where , then all .  A set of vectors is linearly dependent if the set is not linearly independent. More specifically, there exists a solution to where and at least one of the .   "
},
{
  "id": "ch_vector_spaces-5-3",
  "level": "2",
  "url": "ch_vector_spaces-5.html#ch_vector_spaces-5-3",
  "type": "Question",
  "number": "3.33",
  "title": "",
  "body": "Is the set linearly independent?   "
},
{
  "id": "ch_vector_spaces-5-4",
  "level": "2",
  "url": "ch_vector_spaces-5.html#ch_vector_spaces-5-4",
  "type": "Question",
  "number": "3.34",
  "title": "",
  "body": "Is the set linearly independent?   "
},
{
  "id": "ch_vector_spaces-5-5",
  "level": "2",
  "url": "ch_vector_spaces-5.html#ch_vector_spaces-5-5",
  "type": "Question",
  "number": "3.35",
  "title": "",
  "body": "Choose a vector so that the set is linearly independent, where .  Is your choice of in ? Show why or why not.  "
},
{
  "id": "ch_vector_spaces-5-6",
  "level": "2",
  "url": "ch_vector_spaces-5.html#ch_vector_spaces-5-6",
  "type": "Question",
  "number": "3.36",
  "title": "",
  "body": "Is a linearly dependent set in ?   "
},
{
  "id": "ch_vector_spaces-5-7",
  "level": "2",
  "url": "ch_vector_spaces-5.html#ch_vector_spaces-5-7",
  "type": "Exercise",
  "number": "3.14",
  "title": "",
  "body": "Is a linearly independent set in ?  "
},
{
  "id": "ch_vector_spaces-5-8",
  "level": "2",
  "url": "ch_vector_spaces-5.html#ch_vector_spaces-5-8",
  "type": "Exercise",
  "number": "3.15",
  "title": "",
  "body": "Prove that is linearly independent.  "
},
{
  "id": "ch_vector_spaces-5-9",
  "level": "2",
  "url": "ch_vector_spaces-5.html#ch_vector_spaces-5-9",
  "type": "Theorem",
  "number": "3.16",
  "title": "",
  "body": "If a set of a vector space contains , then is linearly dependent.   "
},
{
  "id": "ch_vector_spaces-5-10",
  "level": "2",
  "url": "ch_vector_spaces-5.html#ch_vector_spaces-5-10",
  "type": "Question",
  "number": "3.37",
  "title": "",
  "body": "If is a by matrix, then the columns of A form a linearly independent set if and only if has pivot columns. Completely justify your response.   "
},
{
  "id": "ch_vector_spaces-5-11",
  "level": "2",
  "url": "ch_vector_spaces-5.html#ch_vector_spaces-5-11",
  "type": "Theorem",
  "number": "3.17",
  "title": "",
  "body": "If is linearly independent, then any subset of is linearly independent.   "
},
{
  "id": "ch_vector_spaces-5-12",
  "level": "2",
  "url": "ch_vector_spaces-5.html#ch_vector_spaces-5-12",
  "type": "Question",
  "number": "3.38",
  "title": "",
  "body": "Prove or disprove: If is linearly dependent, then any subset of is linearly dependent.   "
},
{
  "id": "ch_vector_spaces-5-13",
  "level": "2",
  "url": "ch_vector_spaces-5.html#ch_vector_spaces-5-13",
  "type": "Theorem",
  "number": "3.18",
  "title": "",
  "body": "If is in the span of , then is linearly dependent.   "
},
{
  "id": "ch_vector_spaces-5-15",
  "level": "2",
  "url": "ch_vector_spaces-5.html#ch_vector_spaces-5-15",
  "type": "Theorem",
  "number": "3.19",
  "title": "",
  "body": "If is a linearly dependent set, then any can be written as a linear combination from in more than one way.   "
},
{
  "id": "u",
  "level": "2",
  "url": "ch_vector_spaces-5.html#u",
  "type": "Theorem",
  "number": "3.20",
  "title": "",
  "body": "If is a linearly independent set, then any can be written as a linear combination from in only one way.   "
},
{
  "id": "ch_vector_spaces-6",
  "level": "1",
  "url": "ch_vector_spaces-6.html",
  "type": "Section",
  "number": "3.5",
  "title": "Linear Transformations",
  "body": " Linear Transformations   A Digression Into Functions  In class, we have already seen this definition, but we state it here for reference:    Let and be sets. A function  from to is a way of associating to each element of a unique element of . We use the notation to denote that is a function from to . For , we denote that associates with as or as . We call the domain of and the codomain of . The image of is . Sometimes the image is called the range .    We now introduce two properties of functions that will be important in this course and your further study of mathematics.  A function is one-to-one if implies . This means that each input gets sent to a different output by the function . Alternately, you can say a on-to-one function does not map two different inputs to the same output. For functions that we can graph in the -plane, being one-to-one is the same as passing the horizontal line test. A one-to-one function is also called an injection or said to be injective .   Any linear function from to is one-to-one. Suppose with . To prove that is one-to-one, we assume that and show that : Note that we used to divide both sides by .  The domain is important when considering if a function is one-to-one. To see why, consider the function with rule . Since but , we see that this function is not one-to-one. However, if we change the domain and consider defined on the positive real numbers given by the rule , we see that is one-to-one.   A function is onto if for all , there exists such that . In other words, a map is onto if the image of is all of . An onto function is also said to be surjective or a surjection .   To prove that a function is onto, we take an arbitary element of the codomain and find an element of the domain that the function maps to the element of the codomain. We generally do this by first doing calculations on scratch paper and then demonstrating that the element of the domain works as our proof. For instance, consider the linear function from to with . This function is onto. To prove this, let . We will show that : . Since we have started with an arbitrary lement of the codomain and found an element of the domain that is mapped to , we have proved that is onto.  The codomain is essential to deciding if a function is onto. For instance, the function (with domain ) is not onto if the codomain is , as there is no real number that squares to . However, if we change the codomain to be all nonnegative real numbers, then the function is onto as it maps do for all nonnegative real numbers .   For each of the functions from to below state whether the function is either 1-1 but not onto, onto but not 1-1, 1-1 and onto, or not 1-1 and not onto.        For any property above that a function is missing, can you change the domain and\/or codomain so that the function does have the property?      Functions on vector spaces  Linear transformations are the nice functions from a vector space to a vector space. In particular, linear transformations preserve the operations of scalar multiplication and vector addition.    A function from a vector space to a vector space is a linear transformation if for every and           Prove that the map given by is linear, where is an by real-valued matrix.    Eventually we will be able to state a lot of linear transformations as a matrix transformation like in the problem above, but we will not be able to do this in general.  Prove that the map given by is linear. You may use your calculus knowledge.    For each of the following functions, determine if the function is a linear transformation. Remember to justify your reasoning and answers.   where the degree of the polynomial  where  where  where  where   If is a linear transformation and a set of vectors is linearly dependent, then the set is linearly dependent.  Give a counterexample to the following statement: If is a linear transformation and a set of vectors is linearly independent, then the set is linearly independent.    If is a linear transformation from to , then .    If a linear transformation, , sends the vector to and sends the vector to , find the following:      Find a matrix such that for the transformation in the previous problem .    If is a linear transformation from to , then the standard matrix presentation of is a by matrix where is the -th elementary vector of . Note that , where is the Dirac delta function defined by     The vector can also be thought of as the -th column of , the by identity matrix. Because of how we defined the standard matrix presentation, only transformations from to will have standard matrix presentations. In particular, the standard matrix presentation keeps track of where the standard basis vectors ( ) go under the transformation .  Write out , , and from . What is the result of multiplying by ? What about ? ?  What would this mean for the following matrix product:   Determine the standard matrix presentation for the following :  reflects points over the vertical axis  rotates points clockwise by  rotates points by and then flips points over the vertical axis    If a linear transformation, , sends the vector to and sends the vector to , find the following: How can you write as a linear combination of and ?  Find the standard matrix presentation for  Let be the function from to such that for every . Let be the identity map on , for every .  The function is a linear transformation.  The function is a linear transformation.      The null space , or kernel , of a linear transformation is the set of inputs that get mapped to the zero vector of . That is .  Is in the image of the linear transformation where ? Justify your answer without doing any matrix operations. Write the corresponding matrix equation as a vector equation.  Let . Find the image and null space of where . Remember to state the image and null space so that the reader can most easily verify whether a vector is in the set or not.  Let from to be given by .  Prove is linear.  Compute the image of .  Compute the null space of .   Let be the vector space of polynomials in and .  Show the transformation that maps to is a linear transformation.  Compute the null space of .  Compute the range of .   If is a linear transformation from to , then is a subspace of .    If is a linear transformation from to , then is a subspace of .    Let from to be given by .  Is one-to-one?  Is onto?   Give an example of a linear transformation from to that is one-to-one.   Give an example of a linear transformation from to that is onto.  Give an example of a linear transformation from to that is onto.  If the set of columns of a by matrix are linearly independent, does the set of columns of span all of ?  If the set of columns of a by matrix are linearly independent, is the image of all of ?  A linear transformation is onto if and only if .  For each linear transformation from to , if and only if is one-to-one.   "
},
{
  "id": "ch_vector_spaces-6-2-3",
  "level": "2",
  "url": "ch_vector_spaces-6.html#ch_vector_spaces-6-2-3",
  "type": "Definition",
  "number": "3.21",
  "title": "",
  "body": "  Let and be sets. A function  from to is a way of associating to each element of a unique element of . We use the notation to denote that is a function from to . For , we denote that associates with as or as . We call the domain of and the codomain of . The image of is . Sometimes the image is called the range .   "
},
{
  "id": "ch_vector_spaces-6-2-5",
  "level": "2",
  "url": "ch_vector_spaces-6.html#ch_vector_spaces-6-2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "one-to-one injection injective "
},
{
  "id": "ch_vector_spaces-6-2-6",
  "level": "2",
  "url": "ch_vector_spaces-6.html#ch_vector_spaces-6-2-6",
  "type": "Example",
  "number": "3.22",
  "title": "",
  "body": " Any linear function from to is one-to-one. Suppose with . To prove that is one-to-one, we assume that and show that : Note that we used to divide both sides by .  The domain is important when considering if a function is one-to-one. To see why, consider the function with rule . Since but , we see that this function is not one-to-one. However, if we change the domain and consider defined on the positive real numbers given by the rule , we see that is one-to-one.  "
},
{
  "id": "ch_vector_spaces-6-2-7",
  "level": "2",
  "url": "ch_vector_spaces-6.html#ch_vector_spaces-6-2-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "onto surjective surjection "
},
{
  "id": "ch_vector_spaces-6-2-8",
  "level": "2",
  "url": "ch_vector_spaces-6.html#ch_vector_spaces-6-2-8",
  "type": "Example",
  "number": "3.23",
  "title": "",
  "body": " To prove that a function is onto, we take an arbitary element of the codomain and find an element of the domain that the function maps to the element of the codomain. We generally do this by first doing calculations on scratch paper and then demonstrating that the element of the domain works as our proof. For instance, consider the linear function from to with . This function is onto. To prove this, let . We will show that : . Since we have started with an arbitrary lement of the codomain and found an element of the domain that is mapped to , we have proved that is onto.  The codomain is essential to deciding if a function is onto. For instance, the function (with domain ) is not onto if the codomain is , as there is no real number that squares to . However, if we change the codomain to be all nonnegative real numbers, then the function is onto as it maps do for all nonnegative real numbers .  "
},
{
  "id": "ch_vector_spaces-6-2-9",
  "level": "2",
  "url": "ch_vector_spaces-6.html#ch_vector_spaces-6-2-9",
  "type": "Question",
  "number": "3.39",
  "title": "",
  "body": "For each of the functions from to below state whether the function is either 1-1 but not onto, onto but not 1-1, 1-1 and onto, or not 1-1 and not onto.        For any property above that a function is missing, can you change the domain and\/or codomain so that the function does have the property?   "
},
{
  "id": "ch_vector_spaces-6-3-3",
  "level": "2",
  "url": "ch_vector_spaces-6.html#ch_vector_spaces-6-3-3",
  "type": "Definition",
  "number": "3.24",
  "title": "",
  "body": "  A function from a vector space to a vector space is a linear transformation if for every and          "
},
{
  "id": "ch_vector_spaces-6-3-4",
  "level": "2",
  "url": "ch_vector_spaces-6.html#ch_vector_spaces-6-3-4",
  "type": "Question",
  "number": "3.40",
  "title": "",
  "body": "Prove that the map given by is linear, where is an by real-valued matrix.   "
},
{
  "id": "ch_vector_spaces-6-3-5",
  "level": "2",
  "url": "ch_vector_spaces-6.html#ch_vector_spaces-6-3-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "matrix transformation "
},
{
  "id": "ch_vector_spaces-6-3-6",
  "level": "2",
  "url": "ch_vector_spaces-6.html#ch_vector_spaces-6-3-6",
  "type": "Question",
  "number": "3.41",
  "title": "",
  "body": "Prove that the map given by is linear. You may use your calculus knowledge.   "
},
{
  "id": "ch_vector_spaces-6-3-7",
  "level": "2",
  "url": "ch_vector_spaces-6.html#ch_vector_spaces-6-3-7",
  "type": "Question",
  "number": "3.42",
  "title": "",
  "body": "For each of the following functions, determine if the function is a linear transformation. Remember to justify your reasoning and answers.   where the degree of the polynomial  where  where  where  where  "
},
{
  "id": "ch_vector_spaces-6-3-8",
  "level": "2",
  "url": "ch_vector_spaces-6.html#ch_vector_spaces-6-3-8",
  "type": "Theorem",
  "number": "3.25",
  "title": "",
  "body": "If is a linear transformation and a set of vectors is linearly dependent, then the set is linearly dependent. "
},
{
  "id": "ch_vector_spaces-6-3-9",
  "level": "2",
  "url": "ch_vector_spaces-6.html#ch_vector_spaces-6-3-9",
  "type": "Question",
  "number": "3.43",
  "title": "",
  "body": "Give a counterexample to the following statement: If is a linear transformation and a set of vectors is linearly independent, then the set is linearly independent.   "
},
{
  "id": "ch_vector_spaces-6-3-10",
  "level": "2",
  "url": "ch_vector_spaces-6.html#ch_vector_spaces-6-3-10",
  "type": "Theorem",
  "number": "3.26",
  "title": "",
  "body": "If is a linear transformation from to , then .   "
},
{
  "id": "ch_vector_spaces-6-3-11",
  "level": "2",
  "url": "ch_vector_spaces-6.html#ch_vector_spaces-6-3-11",
  "type": "Question",
  "number": "3.44",
  "title": "",
  "body": "If a linear transformation, , sends the vector to and sends the vector to , find the following:     "
},
{
  "id": "ch_vector_spaces-6-3-12",
  "level": "2",
  "url": "ch_vector_spaces-6.html#ch_vector_spaces-6-3-12",
  "type": "Question",
  "number": "3.45",
  "title": "",
  "body": "Find a matrix such that for the transformation in the previous problem .   "
},
{
  "id": "ch_vector_spaces-6-3-13",
  "level": "2",
  "url": "ch_vector_spaces-6.html#ch_vector_spaces-6-3-13",
  "type": "Definition",
  "number": "3.27",
  "title": "",
  "body": "If is a linear transformation from to , then the standard matrix presentation of is a by matrix where is the -th elementary vector of . Note that , where is the Dirac delta function defined by    "
},
{
  "id": "ch_vector_spaces-6-3-15",
  "level": "2",
  "url": "ch_vector_spaces-6.html#ch_vector_spaces-6-3-15",
  "type": "Exercise",
  "number": "3.28",
  "title": "",
  "body": "Write out , , and from . What is the result of multiplying by ? What about ? ?  What would this mean for the following matrix product:  "
},
{
  "id": "ch_vector_spaces-6-3-16",
  "level": "2",
  "url": "ch_vector_spaces-6.html#ch_vector_spaces-6-3-16",
  "type": "Question",
  "number": "3.46",
  "title": "",
  "body": "Determine the standard matrix presentation for the following :  reflects points over the vertical axis  rotates points clockwise by  rotates points by and then flips points over the vertical axis  "
},
{
  "id": "ch_vector_spaces-6-3-17",
  "level": "2",
  "url": "ch_vector_spaces-6.html#ch_vector_spaces-6-3-17",
  "type": "Exercise",
  "number": "3.29",
  "title": "",
  "body": "If a linear transformation, , sends the vector to and sends the vector to , find the following: How can you write as a linear combination of and ?  Find the standard matrix presentation for "
},
{
  "id": "ch_vector_spaces-6-3-18",
  "level": "2",
  "url": "ch_vector_spaces-6.html#ch_vector_spaces-6-3-18",
  "type": "Theorem",
  "number": "3.30",
  "title": "",
  "body": "Let be the function from to such that for every . Let be the identity map on , for every .  The function is a linear transformation.  The function is a linear transformation.     "
},
{
  "id": "ch_vector_spaces-6-3-19",
  "level": "2",
  "url": "ch_vector_spaces-6.html#ch_vector_spaces-6-3-19",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "null space kernel "
},
{
  "id": "ch_vector_spaces-6-3-20",
  "level": "2",
  "url": "ch_vector_spaces-6.html#ch_vector_spaces-6-3-20",
  "type": "Question",
  "number": "3.47",
  "title": "",
  "body": "Is in the image of the linear transformation where ? Justify your answer without doing any matrix operations. Write the corresponding matrix equation as a vector equation. "
},
{
  "id": "ch_vector_spaces-6-3-21",
  "level": "2",
  "url": "ch_vector_spaces-6.html#ch_vector_spaces-6-3-21",
  "type": "Exercise",
  "number": "3.31",
  "title": "",
  "body": "Let . Find the image and null space of where . Remember to state the image and null space so that the reader can most easily verify whether a vector is in the set or not. "
},
{
  "id": "ch_vector_spaces-6-3-22",
  "level": "2",
  "url": "ch_vector_spaces-6.html#ch_vector_spaces-6-3-22",
  "type": "Question",
  "number": "3.48",
  "title": "",
  "body": "Let from to be given by .  Prove is linear.  Compute the image of .  Compute the null space of .  "
},
{
  "id": "ch_vector_spaces-6-3-23",
  "level": "2",
  "url": "ch_vector_spaces-6.html#ch_vector_spaces-6-3-23",
  "type": "Question",
  "number": "3.49",
  "title": "",
  "body": "Let be the vector space of polynomials in and .  Show the transformation that maps to is a linear transformation.  Compute the null space of .  Compute the range of .  "
},
{
  "id": "rnss",
  "level": "2",
  "url": "ch_vector_spaces-6.html#rnss",
  "type": "Theorem",
  "number": "3.32",
  "title": "",
  "body": "If is a linear transformation from to , then is a subspace of .   "
},
{
  "id": "rnss2",
  "level": "2",
  "url": "ch_vector_spaces-6.html#rnss2",
  "type": "Theorem",
  "number": "3.33",
  "title": "",
  "body": "If is a linear transformation from to , then is a subspace of .   "
},
{
  "id": "ch_vector_spaces-6-3-26",
  "level": "2",
  "url": "ch_vector_spaces-6.html#ch_vector_spaces-6-3-26",
  "type": "Question",
  "number": "3.50",
  "title": "",
  "body": "Let from to be given by .  Is one-to-one?  Is onto?  "
},
{
  "id": "ch_vector_spaces-6-3-27",
  "level": "2",
  "url": "ch_vector_spaces-6.html#ch_vector_spaces-6-3-27",
  "type": "Question",
  "number": "3.51",
  "title": "",
  "body": "Give an example of a linear transformation from to that is one-to-one.  "
},
{
  "id": "ch_vector_spaces-6-3-28",
  "level": "2",
  "url": "ch_vector_spaces-6.html#ch_vector_spaces-6-3-28",
  "type": "Question",
  "number": "3.52",
  "title": "",
  "body": "Give an example of a linear transformation from to that is onto. "
},
{
  "id": "ch_vector_spaces-6-3-29",
  "level": "2",
  "url": "ch_vector_spaces-6.html#ch_vector_spaces-6-3-29",
  "type": "Question",
  "number": "3.53",
  "title": "",
  "body": "Give an example of a linear transformation from to that is onto. "
},
{
  "id": "ch_vector_spaces-6-3-30",
  "level": "2",
  "url": "ch_vector_spaces-6.html#ch_vector_spaces-6-3-30",
  "type": "Question",
  "number": "3.54",
  "title": "",
  "body": "If the set of columns of a by matrix are linearly independent, does the set of columns of span all of ? "
},
{
  "id": "ch_vector_spaces-6-3-31",
  "level": "2",
  "url": "ch_vector_spaces-6.html#ch_vector_spaces-6-3-31",
  "type": "Question",
  "number": "3.55",
  "title": "",
  "body": "If the set of columns of a by matrix are linearly independent, is the image of all of ? "
},
{
  "id": "ch_vector_spaces-6-3-32",
  "level": "2",
  "url": "ch_vector_spaces-6.html#ch_vector_spaces-6-3-32",
  "type": "Theorem",
  "number": "3.34",
  "title": "",
  "body": "A linear transformation is onto if and only if . "
},
{
  "id": "ch_vector_spaces-6-3-33",
  "level": "2",
  "url": "ch_vector_spaces-6.html#ch_vector_spaces-6-3-33",
  "type": "Theorem",
  "number": "3.35",
  "title": "",
  "body": "For each linear transformation from to , if and only if is one-to-one. "
},
{
  "id": "ch_connecting_ideas-2",
  "level": "1",
  "url": "ch_connecting_ideas-2.html",
  "type": "Section",
  "number": "4.1",
  "title": "Basis and Dimension",
  "body": " Basis and Dimension  In the previous chapter, we saw that if a set spans a vector space , then is big enough to write everything in (as a linear combination of ). We also saw that a linearly independent set had a unique way to represent elements in . A convenient and minimal way to describe a vector space is to give a set of vectors that spans all of but does not include anything extra.    A basis for a vector space is a set of vectors that is linearly independent and spans .    In this way, a basis is big enough (spans ) and contains nothing extra (linearly independent).  Can a set of 4 vectors be a basis for ? Why or why not? Be sure to justify using ideas from Chapter 1 and not any theorems past this point.  Can a set of 2 vectors be a basis for ? Why or why not?    If there exists a basis for a vector space with vectors, then every basis of must have exactly vectors.    Assume by way of contradiction that is a vector space with bases and with . Since and is a basis for , there are scalars such that . Since is linearly independent, and at least one . Without loss of generality, assume that . Now let . We claim that is a basis for . Notice that we can write Thus, and so any vector in can be written to demonstrate that it is also in . To see that is linearly independent, suppose that is a nontrivial linear combination of vectors in that sums to the zero vector. Notice that if , then we have a nontrivial linear combination of vectors from that sums to the zero vector, which contradicts that is linearly independent. Thus, . In this case, substitute and combine like terms. Since , we now have a nontrivial linear combination of vectors from that sums to , which contradicts that is a basis for . We will now show, as with using mathematical induction, that we can continue to move vectors from into our basis. To do so, we assume for some such that that is a basis for . We will show that is also a basis for . We know that , so there are scalars such that . Notice that this requires some with be nonzero, as otherwise we would have written as a linear combination of elements of (other than ), which would mean that is not linearly independent. Without loss of generality, assume that . Notice that equation can be rearranged to show that as we did with earlier, so spans . To prove that is linearly independent, suppose that is a nontrivial linear combination that sums to the zero vector. Notice that or else we have demonstrated that is linearly dependent. However, we now have . Notice that is not present in this sum, but otherwise this is a linear combination of elements of . Since has a nonzero coefficient on , this is a different linear combination summing to . Thus, is not linearly independent, which is a contradiction.  Thus, we can produce a sequence of bases for . Notice that and that is not in this set as . However, since is a basis, we can write as a linear combination of elements of . Thus, there are two ways to write as a linear combination of elements of , contradicting that is linearly independent.    The previous theorem does not imply that there is only one basis for a vector space, just that any two bases for the same vector space will have the exact same number of vectors. The idea that every basis for a vector space has the same number of vectors gives rise to the idea of dimension.  If a vector space has a basis with a finite number of elements, , then we say that has dimension  or that is -dimensional , also written as .  Show that is a basis for and thus that is an -dimensional vector space.  Give a set of 3 different vectors in that are not a basis for . Be sure to show why the set does not satisfy the definition of a basis.  Give a basis for and compute the dimension of .  What is ? Be sure to justify.  Recall that the set is the trivial vector space. What is a basis for ? What is ?    If is an -dimensional vector space and is a set with exactly vectors, then is linearly independent if and only if spans .    This is an enormously helpful theorem since we know that a linearly independent set of vectors from a -dimensional vector space is a basis (no need to show spanning). This goes the other way as well, namely if a set of vectors, , spans a -dimensional vector space, , then is a basis for (no need to show linear independence).  Prove that is a basis for .  Give two different bases for .  What is the dimension of , the vector space of symmetric 3 by 3 matrices?  What is the dimension of ?  What is the dimension of ?  Prove that is a subspace of .  Is ?  What dimension is ?   Rank and nullity  Recall that if is linear, then and are subspaces of and respectively.   The rank of a transformation is and the nullity of is .   Let .  Find and where .  Find a basis for .  Find a basis for .   Let from to be given by .  We already worked out what the image of was in an earlier problem and found that . Notice that we can rewrite the polynomials in the image to have the form , and grouping based on the scalar, we have . Thus, every vector in the image is a linear combination of and . I will leave it to you to verify that these vectors are linearly independent, but this shows that the rank of is 2. (Since we have found a basis, this also answers the last part of this question.  Notice that to be sent to the zero polynomial, a vector in the domain must have to get the constant term to be zero. But then this forces . Thus, as the null space is the trivial vector space. Find a basis for .  Since the null space is trivial, the basis is the empty set.  Find a basis for .  Let be given by . Compute and .  Dimension Theorem Let be a linear transformation from to with a -dimensional vector space. .    If is a matrix transformation ( ), then .  Using previous work, prove the for given by , where is a by matrix.  List out all possible echelon forms of 3 by 3 matrices using the symbols for pivot, for non-pivot entry (possibly ), and if an entry must be . For each form, give the rank of the matrix and the dimension of the null space.   Coordinate vectors relative to a basis  Given an ordered basis of a vector space , the coordinate vector of relative to , denoted , is a vector of the coefficients of the unique way to write as a linear combination of . Namely, if , then .  For each of the following vectors, compute where        In the previous problem, you wrote out the coordinate vectors relative to . Note that the first three vectors you used form a basis as well, which we will call .   Compute for .  The coordinate vectors of relative to can be used to make the change of basis matrix from to . Specifically, the change of basis matrix from to is given by . Use your work from the previous question, to construct the change of basis matrix from to .  Multiplying by this change of basis matrix will convert a coordinate vector relative to to a coordinate vector relative to . Verify that if you multiply your change of basis matrix from to by you get where .   The above process of constructing a change of basis matrix works for any two bases of the same vector space (even if the vector space is not ).  For each of the following vectors, compute where .                The coordinate vector allows us to state problems in a vector space like in the same way we state problems in .  For each of the following vectors, compute where .       "
},
{
  "id": "ch_connecting_ideas-2-3",
  "level": "2",
  "url": "ch_connecting_ideas-2.html#ch_connecting_ideas-2-3",
  "type": "Definition",
  "number": "4.1",
  "title": "",
  "body": "  A basis for a vector space is a set of vectors that is linearly independent and spans .   "
},
{
  "id": "ch_connecting_ideas-2-5",
  "level": "2",
  "url": "ch_connecting_ideas-2.html#ch_connecting_ideas-2-5",
  "type": "Question",
  "number": "4.1",
  "title": "",
  "body": "Can a set of 4 vectors be a basis for ? Why or why not? Be sure to justify using ideas from Chapter 1 and not any theorems past this point. "
},
{
  "id": "ch_connecting_ideas-2-6",
  "level": "2",
  "url": "ch_connecting_ideas-2.html#ch_connecting_ideas-2-6",
  "type": "Question",
  "number": "4.2",
  "title": "",
  "body": "Can a set of 2 vectors be a basis for ? Why or why not? "
},
{
  "id": "ch_connecting_ideas-2-7",
  "level": "2",
  "url": "ch_connecting_ideas-2.html#ch_connecting_ideas-2-7",
  "type": "Theorem",
  "number": "4.2",
  "title": "",
  "body": "  If there exists a basis for a vector space with vectors, then every basis of must have exactly vectors.    Assume by way of contradiction that is a vector space with bases and with . Since and is a basis for , there are scalars such that . Since is linearly independent, and at least one . Without loss of generality, assume that . Now let . We claim that is a basis for . Notice that we can write Thus, and so any vector in can be written to demonstrate that it is also in . To see that is linearly independent, suppose that is a nontrivial linear combination of vectors in that sums to the zero vector. Notice that if , then we have a nontrivial linear combination of vectors from that sums to the zero vector, which contradicts that is linearly independent. Thus, . In this case, substitute and combine like terms. Since , we now have a nontrivial linear combination of vectors from that sums to , which contradicts that is a basis for . We will now show, as with using mathematical induction, that we can continue to move vectors from into our basis. To do so, we assume for some such that that is a basis for . We will show that is also a basis for . We know that , so there are scalars such that . Notice that this requires some with be nonzero, as otherwise we would have written as a linear combination of elements of (other than ), which would mean that is not linearly independent. Without loss of generality, assume that . Notice that equation can be rearranged to show that as we did with earlier, so spans . To prove that is linearly independent, suppose that is a nontrivial linear combination that sums to the zero vector. Notice that or else we have demonstrated that is linearly dependent. However, we now have . Notice that is not present in this sum, but otherwise this is a linear combination of elements of . Since has a nonzero coefficient on , this is a different linear combination summing to . Thus, is not linearly independent, which is a contradiction.  Thus, we can produce a sequence of bases for . Notice that and that is not in this set as . However, since is a basis, we can write as a linear combination of elements of . Thus, there are two ways to write as a linear combination of elements of , contradicting that is linearly independent.   "
},
{
  "id": "ch_connecting_ideas-2-9",
  "level": "2",
  "url": "ch_connecting_ideas-2.html#ch_connecting_ideas-2-9",
  "type": "Definition",
  "number": "4.3",
  "title": "",
  "body": "If a vector space has a basis with a finite number of elements, , then we say that has dimension  or that is -dimensional , also written as . "
},
{
  "id": "ch_connecting_ideas-2-10",
  "level": "2",
  "url": "ch_connecting_ideas-2.html#ch_connecting_ideas-2-10",
  "type": "Question",
  "number": "4.3",
  "title": "",
  "body": "Show that is a basis for and thus that is an -dimensional vector space. "
},
{
  "id": "ch_connecting_ideas-2-11",
  "level": "2",
  "url": "ch_connecting_ideas-2.html#ch_connecting_ideas-2-11",
  "type": "Question",
  "number": "4.4",
  "title": "",
  "body": "Give a set of 3 different vectors in that are not a basis for . Be sure to show why the set does not satisfy the definition of a basis. "
},
{
  "id": "ch_connecting_ideas-2-12",
  "level": "2",
  "url": "ch_connecting_ideas-2.html#ch_connecting_ideas-2-12",
  "type": "Question",
  "number": "4.5",
  "title": "",
  "body": "Give a basis for and compute the dimension of . "
},
{
  "id": "ch_connecting_ideas-2-13",
  "level": "2",
  "url": "ch_connecting_ideas-2.html#ch_connecting_ideas-2-13",
  "type": "Question",
  "number": "4.6",
  "title": "",
  "body": "What is ? Be sure to justify. "
},
{
  "id": "ch_connecting_ideas-2-14",
  "level": "2",
  "url": "ch_connecting_ideas-2.html#ch_connecting_ideas-2-14",
  "type": "Question",
  "number": "4.7",
  "title": "",
  "body": "Recall that the set is the trivial vector space. What is a basis for ? What is ? "
},
{
  "id": "ch_connecting_ideas-2-15",
  "level": "2",
  "url": "ch_connecting_ideas-2.html#ch_connecting_ideas-2-15",
  "type": "Theorem",
  "number": "4.4",
  "title": "",
  "body": "  If is an -dimensional vector space and is a set with exactly vectors, then is linearly independent if and only if spans .   "
},
{
  "id": "ch_connecting_ideas-2-17",
  "level": "2",
  "url": "ch_connecting_ideas-2.html#ch_connecting_ideas-2-17",
  "type": "Question",
  "number": "4.8",
  "title": "",
  "body": "Prove that is a basis for . "
},
{
  "id": "ch_connecting_ideas-2-18",
  "level": "2",
  "url": "ch_connecting_ideas-2.html#ch_connecting_ideas-2-18",
  "type": "Question",
  "number": "4.9",
  "title": "",
  "body": "Give two different bases for . "
},
{
  "id": "ch_connecting_ideas-2-19",
  "level": "2",
  "url": "ch_connecting_ideas-2.html#ch_connecting_ideas-2-19",
  "type": "Question",
  "number": "4.10",
  "title": "",
  "body": "What is the dimension of , the vector space of symmetric 3 by 3 matrices? "
},
{
  "id": "ch_connecting_ideas-2-20",
  "level": "2",
  "url": "ch_connecting_ideas-2.html#ch_connecting_ideas-2-20",
  "type": "Question",
  "number": "4.11",
  "title": "",
  "body": "What is the dimension of ? "
},
{
  "id": "ch_connecting_ideas-2-21",
  "level": "2",
  "url": "ch_connecting_ideas-2.html#ch_connecting_ideas-2-21",
  "type": "Question",
  "number": "4.12",
  "title": "",
  "body": "What is the dimension of ? "
},
{
  "id": "ch_connecting_ideas-2-22",
  "level": "2",
  "url": "ch_connecting_ideas-2.html#ch_connecting_ideas-2-22",
  "type": "Question",
  "number": "4.13",
  "title": "",
  "body": "Prove that is a subspace of .  Is ?  What dimension is ? "
},
{
  "id": "ch_connecting_ideas-2-23-3",
  "level": "2",
  "url": "ch_connecting_ideas-2.html#ch_connecting_ideas-2-23-3",
  "type": "Definition",
  "number": "4.5",
  "title": "",
  "body": " The rank of a transformation is and the nullity of is .  "
},
{
  "id": "ch_connecting_ideas-2-23-4",
  "level": "2",
  "url": "ch_connecting_ideas-2.html#ch_connecting_ideas-2-23-4",
  "type": "Question",
  "number": "4.14",
  "title": "",
  "body": "Let .  Find and where .  Find a basis for .  Find a basis for .  "
},
{
  "id": "ch_connecting_ideas-2-23-5",
  "level": "2",
  "url": "ch_connecting_ideas-2.html#ch_connecting_ideas-2-23-5",
  "type": "Exercise",
  "number": "4.6",
  "title": "",
  "body": "Let from to be given by .  We already worked out what the image of was in an earlier problem and found that . Notice that we can rewrite the polynomials in the image to have the form , and grouping based on the scalar, we have . Thus, every vector in the image is a linear combination of and . I will leave it to you to verify that these vectors are linearly independent, but this shows that the rank of is 2. (Since we have found a basis, this also answers the last part of this question.  Notice that to be sent to the zero polynomial, a vector in the domain must have to get the constant term to be zero. But then this forces . Thus, as the null space is the trivial vector space. Find a basis for .  Since the null space is trivial, the basis is the empty set.  Find a basis for . "
},
{
  "id": "ch_connecting_ideas-2-23-6",
  "level": "2",
  "url": "ch_connecting_ideas-2.html#ch_connecting_ideas-2-23-6",
  "type": "Question",
  "number": "4.15",
  "title": "",
  "body": "Let be given by . Compute and . "
},
{
  "id": "thm_dimension",
  "level": "2",
  "url": "ch_connecting_ideas-2.html#thm_dimension",
  "type": "Theorem",
  "number": "4.7",
  "title": "Dimension Theorem.",
  "body": "Dimension Theorem Let be a linear transformation from to with a -dimensional vector space. .   "
},
{
  "id": "ch_connecting_ideas-2-23-9",
  "level": "2",
  "url": "ch_connecting_ideas-2.html#ch_connecting_ideas-2-23-9",
  "type": "Question",
  "number": "4.16",
  "title": "",
  "body": "Using previous work, prove the for given by , where is a by matrix. "
},
{
  "id": "ch_connecting_ideas-2-23-10",
  "level": "2",
  "url": "ch_connecting_ideas-2.html#ch_connecting_ideas-2-23-10",
  "type": "Exercise",
  "number": "4.8",
  "title": "",
  "body": "List out all possible echelon forms of 3 by 3 matrices using the symbols for pivot, for non-pivot entry (possibly ), and if an entry must be . For each form, give the rank of the matrix and the dimension of the null space. "
},
{
  "id": "ch_connecting_ideas-2-24-2",
  "level": "2",
  "url": "ch_connecting_ideas-2.html#ch_connecting_ideas-2-24-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coordinate vector of relative to "
},
{
  "id": "ch_connecting_ideas-2-24-3",
  "level": "2",
  "url": "ch_connecting_ideas-2.html#ch_connecting_ideas-2-24-3",
  "type": "Question",
  "number": "4.17",
  "title": "",
  "body": "For each of the following vectors, compute where       "
},
{
  "id": "ch_connecting_ideas-2-24-4",
  "level": "2",
  "url": "ch_connecting_ideas-2.html#ch_connecting_ideas-2-24-4",
  "type": "Question",
  "number": "4.18",
  "title": "",
  "body": "In the previous problem, you wrote out the coordinate vectors relative to . Note that the first three vectors you used form a basis as well, which we will call .   Compute for .  The coordinate vectors of relative to can be used to make the change of basis matrix from to . Specifically, the change of basis matrix from to is given by . Use your work from the previous question, to construct the change of basis matrix from to .  Multiplying by this change of basis matrix will convert a coordinate vector relative to to a coordinate vector relative to . Verify that if you multiply your change of basis matrix from to by you get where .  "
},
{
  "id": "ch_connecting_ideas-2-24-6",
  "level": "2",
  "url": "ch_connecting_ideas-2.html#ch_connecting_ideas-2-24-6",
  "type": "Exercise",
  "number": "4.9",
  "title": "",
  "body": "For each of the following vectors, compute where .               "
},
{
  "id": "ch_connecting_ideas-2-24-8",
  "level": "2",
  "url": "ch_connecting_ideas-2.html#ch_connecting_ideas-2-24-8",
  "type": "Exercise",
  "number": "4.10",
  "title": "",
  "body": "For each of the following vectors, compute where .     "
},
{
  "id": "ch_connecting_ideas-3",
  "level": "1",
  "url": "ch_connecting_ideas-3.html",
  "type": "Section",
  "number": "4.2",
  "title": "Invertible Matrices",
  "body": " Invertible Matrices  In this section, we will only consider square matrices. A matrix is invertible if there exists a matrix such that and . The inverse matrix of is denoted . Be careful that you do not use the notation until you have shown that is invertible.   Elementary Matrices  Recall that an elementary row operation on a matrix is an operation of the form:  multiplying a row by a non-zero scalar  switching two rows  adding a multiple of one row to another row  Elementary matrices are obtained by performing an elementary operation on the identity matrix.  Give the elementary matrix obtained by performing the given operation on . (These are 4 separate questions):   Scaling the first row by  Switching the second and third rows  Adding 3 times the 2nd row to the 1st row  Adding 3 times the 1st row to the 2nd row   Check that your answer to the previous question does the desired operation by multiplying each of the four previous elementary matrices by . Which side do you multiply the elementary matrix on to correspond to row operations?  Compute (and verify) the inverse of each of the elementary matrices from the previous problems.  Think about how you would go backwards for each of the elementary operations.  Your work on the previous questions should convince you that elementary matrices are invertible and that multiplying by an elementary matrix produces the same result as having performed the corresponding elementary row operation. Elementary matrices offer a way of keeping track of elementary operations. We will not write our a proof of the following theorem at this time, but we state it for future uses:    Elementary matrices are invertible and the inverse matrix is an elementary matrix corresponding to the inverse elementary operation.    You shoud, however, at this time prove the theorems below.    If and are invertible by matrices, then and is an invertible by matrix.    If can be reduced to by elementary row operations, then is invertible.  Give all values of where will be invertible.  Give all values of where will be invertible.  How many pivots must a matrix have in order to be row reducible to ? Justify using previous results.  If is invertible, then has a unique solution for every .  Prove or disprove: If and are invertible by matrices, then is invertible.  Prove that if is invertible, then is invertible.    Computing Inverses  In general computing the inverse of a matrix takes more time and operations than solving a system of equations. For this reason, it is generally easier to find and solve a related system of equations problem than to compute the inverse matrix. We will outline a few ways to find inverse matrices and compute a few small examples.  If a matrix is row reduced to by elementary row operations corresponding (in order of use) to elementary matrices , , ... , , give an expression for .  Use your answer to the previous question to prove the following: Any sequence of elementary row operations that reduces to also transforms into .  The previous result shows that computing inverses is equivalent to a row reduction problem. In particular, if is invertible, then reducing to reduced row echelon form will produce the matrix .  Use the idea above to compute the inverse of . Be sure to note any assumptions you will need to make in order to reduce to .  If , find and check that .  If , find and use your answer to solve if:    Invertible Matrix Theorem  In many texts there is a long list of equivalent conditions for when a square matrix is invertible. Below is a list of some of these conditions that we have talked about or proven. Go back through your notes and questions and cite when we connected two of the ideas in the list. For instance, parts and are linked by   Before stating this major theorem, we should explain what the phrase the following are equivalent (sometimes written TFAE in scratchwork or on the board) means. A theorem of this type is essentially a giant if and only if theorem. Specifically, each statement in the theorem is true or each statement in the theorem is false. It is not possible for some to be true and some to be false. In a theorem with, say, three statements, we often prove that statement 1 implies statement 2, statement 2 implies statement 3, and statement three implies statement 1. Then you can start at any statement and reach any other statement, showing that if one is true, all the others must be true. However, with longer lists, we sometimes have to prove things a bit more piecemeal.  The Invertible Matrix Theorem   Let be a by matrix. The following are equivalent:  is an invertible matrix.  is row equivalent to .  has pivots.    has only the trivial solution.  The linear transformation is one-to-one.  The linear transformation is onto.  has a solution for every .  The columns of form a linearly independent set.  The columns of span .  The columns of are a basis for .  is invertible.      Two important ideas in this course that have been tied to many different methods or ideas are 1) consistent systems of linear equations and 2) invertible matrices. These two ideas are a bit different though. Give an example of a consistent system of linear equations (in matrix equation form ) where the coefficient matrix is a non-invertible square matrix.  We close this section with a theorem that should not be surprising based on the work that we have done so far. A proof is provided for you. The criterion the following theorem states can be added to the list of statements in .    A square matrix is invertible if and only if there exist elementary matrices such that .      Since is invertible, there exist elementary matrices that row reduce to the identity matrix. That is, we have elementary matrices such that . Each elementary matrix is invertible, so we can write . As the inverse of an elementary matrix is an elementary matrix, the right-hand side is a product of elementary matrices as desired.     If we have , we can multiply one-by-one on the left by the inverses of the elementary matrices, which are also elementary matrices. Thus, we have . This shows that there is a way to row reduce and obtain the identity matrix, so is invertible.      "
},
{
  "id": "ch_connecting_ideas-3-2-1",
  "level": "2",
  "url": "ch_connecting_ideas-3.html#ch_connecting_ideas-3-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "invertible "
},
{
  "id": "ch_connecting_ideas-3-3-3",
  "level": "2",
  "url": "ch_connecting_ideas-3.html#ch_connecting_ideas-3-3-3",
  "type": "Question",
  "number": "4.19",
  "title": "",
  "body": "Give the elementary matrix obtained by performing the given operation on . (These are 4 separate questions):   Scaling the first row by  Switching the second and third rows  Adding 3 times the 2nd row to the 1st row  Adding 3 times the 1st row to the 2nd row  "
},
{
  "id": "ch_connecting_ideas-3-3-4",
  "level": "2",
  "url": "ch_connecting_ideas-3.html#ch_connecting_ideas-3-3-4",
  "type": "Question",
  "number": "4.20",
  "title": "",
  "body": "Check that your answer to the previous question does the desired operation by multiplying each of the four previous elementary matrices by . Which side do you multiply the elementary matrix on to correspond to row operations? "
},
{
  "id": "ch_connecting_ideas-3-3-5",
  "level": "2",
  "url": "ch_connecting_ideas-3.html#ch_connecting_ideas-3-3-5",
  "type": "Question",
  "number": "4.21",
  "title": "",
  "body": "Compute (and verify) the inverse of each of the elementary matrices from the previous problems.  Think about how you would go backwards for each of the elementary operations. "
},
{
  "id": "ch_connecting_ideas-3-3-7",
  "level": "2",
  "url": "ch_connecting_ideas-3.html#ch_connecting_ideas-3-3-7",
  "type": "Theorem",
  "number": "4.11",
  "title": "",
  "body": "  Elementary matrices are invertible and the inverse matrix is an elementary matrix corresponding to the inverse elementary operation.   "
},
{
  "id": "ch_connecting_ideas-3-3-9",
  "level": "2",
  "url": "ch_connecting_ideas-3.html#ch_connecting_ideas-3-3-9",
  "type": "Theorem",
  "number": "4.12",
  "title": "",
  "body": "  If and are invertible by matrices, then and is an invertible by matrix.   "
},
{
  "id": "q11",
  "level": "2",
  "url": "ch_connecting_ideas-3.html#q11",
  "type": "Theorem",
  "number": "4.13",
  "title": "",
  "body": "If can be reduced to by elementary row operations, then is invertible. "
},
{
  "id": "ch_connecting_ideas-3-3-11",
  "level": "2",
  "url": "ch_connecting_ideas-3.html#ch_connecting_ideas-3-3-11",
  "type": "Question",
  "number": "4.22",
  "title": "",
  "body": "Give all values of where will be invertible. "
},
{
  "id": "ch_connecting_ideas-3-3-12",
  "level": "2",
  "url": "ch_connecting_ideas-3.html#ch_connecting_ideas-3-3-12",
  "type": "Question",
  "number": "4.23",
  "title": "",
  "body": "Give all values of where will be invertible. "
},
{
  "id": "ch_connecting_ideas-3-3-13",
  "level": "2",
  "url": "ch_connecting_ideas-3.html#ch_connecting_ideas-3-3-13",
  "type": "Question",
  "number": "4.24",
  "title": "",
  "body": "How many pivots must a matrix have in order to be row reducible to ? Justify using previous results. "
},
{
  "id": "ch_connecting_ideas-3-3-14",
  "level": "2",
  "url": "ch_connecting_ideas-3.html#ch_connecting_ideas-3-3-14",
  "type": "Theorem",
  "number": "4.14",
  "title": "",
  "body": "If is invertible, then has a unique solution for every . "
},
{
  "id": "ch_connecting_ideas-3-3-15",
  "level": "2",
  "url": "ch_connecting_ideas-3.html#ch_connecting_ideas-3-3-15",
  "type": "Question",
  "number": "4.25",
  "title": "",
  "body": "Prove or disprove: If and are invertible by matrices, then is invertible. "
},
{
  "id": "ch_connecting_ideas-3-3-16",
  "level": "2",
  "url": "ch_connecting_ideas-3.html#ch_connecting_ideas-3-3-16",
  "type": "Question",
  "number": "4.26",
  "title": "",
  "body": "Prove that if is invertible, then is invertible. "
},
{
  "id": "ch_connecting_ideas-3-4-3",
  "level": "2",
  "url": "ch_connecting_ideas-3.html#ch_connecting_ideas-3-4-3",
  "type": "Question",
  "number": "4.27",
  "title": "",
  "body": "If a matrix is row reduced to by elementary row operations corresponding (in order of use) to elementary matrices , , ... , , give an expression for . "
},
{
  "id": "ch_connecting_ideas-3-4-4",
  "level": "2",
  "url": "ch_connecting_ideas-3.html#ch_connecting_ideas-3-4-4",
  "type": "Question",
  "number": "4.28",
  "title": "",
  "body": "Use your answer to the previous question to prove the following: Any sequence of elementary row operations that reduces to also transforms into . "
},
{
  "id": "inv22",
  "level": "2",
  "url": "ch_connecting_ideas-3.html#inv22",
  "type": "Question",
  "number": "4.29",
  "title": "",
  "body": "Use the idea above to compute the inverse of . Be sure to note any assumptions you will need to make in order to reduce to . "
},
{
  "id": "ch_connecting_ideas-3-4-7",
  "level": "2",
  "url": "ch_connecting_ideas-3.html#ch_connecting_ideas-3-4-7",
  "type": "Exercise",
  "number": "4.15",
  "title": "",
  "body": "If , find and check that . "
},
{
  "id": "ch_connecting_ideas-3-4-8",
  "level": "2",
  "url": "ch_connecting_ideas-3.html#ch_connecting_ideas-3-4-8",
  "type": "Exercise",
  "number": "4.16",
  "title": "",
  "body": "If , find and use your answer to solve if: "
},
{
  "id": "ch_connecting_ideas-3-5-2",
  "level": "2",
  "url": "ch_connecting_ideas-3.html#ch_connecting_ideas-3-5-2",
  "type": "Question",
  "number": "4.30",
  "title": "",
  "body": "In many texts there is a long list of equivalent conditions for when a square matrix is invertible. Below is a list of some of these conditions that we have talked about or proven. Go back through your notes and questions and cite when we connected two of the ideas in the list. For instance, parts and are linked by  "
},
{
  "id": "imt",
  "level": "2",
  "url": "ch_connecting_ideas-3.html#imt",
  "type": "Theorem",
  "number": "4.17",
  "title": "The Invertible Matrix Theorem.",
  "body": "The Invertible Matrix Theorem   Let be a by matrix. The following are equivalent:  is an invertible matrix.  is row equivalent to .  has pivots.    has only the trivial solution.  The linear transformation is one-to-one.  The linear transformation is onto.  has a solution for every .  The columns of form a linearly independent set.  The columns of span .  The columns of are a basis for .  is invertible.     "
},
{
  "id": "ch_connecting_ideas-3-5-5",
  "level": "2",
  "url": "ch_connecting_ideas-3.html#ch_connecting_ideas-3-5-5",
  "type": "Question",
  "number": "4.31",
  "title": "",
  "body": "Two important ideas in this course that have been tied to many different methods or ideas are 1) consistent systems of linear equations and 2) invertible matrices. These two ideas are a bit different though. Give an example of a consistent system of linear equations (in matrix equation form ) where the coefficient matrix is a non-invertible square matrix. "
},
{
  "id": "ch_connecting_ideas-3-5-7",
  "level": "2",
  "url": "ch_connecting_ideas-3.html#ch_connecting_ideas-3-5-7",
  "type": "Theorem",
  "number": "4.18",
  "title": "",
  "body": "  A square matrix is invertible if and only if there exist elementary matrices such that .      Since is invertible, there exist elementary matrices that row reduce to the identity matrix. That is, we have elementary matrices such that . Each elementary matrix is invertible, so we can write . As the inverse of an elementary matrix is an elementary matrix, the right-hand side is a product of elementary matrices as desired.     If we have , we can multiply one-by-one on the left by the inverses of the elementary matrices, which are also elementary matrices. Thus, we have . This shows that there is a way to row reduce and obtain the identity matrix, so is invertible.    "
},
{
  "id": "ch_connecting_ideas-4",
  "level": "1",
  "url": "ch_connecting_ideas-4.html",
  "type": "Section",
  "number": "4.3",
  "title": "Determinants",
  "body": " Determinants  Determinants will be an incredibly useful tool in quickly determining several important properties of square matrices. We will first look at how to compute determinants and later outline the important properties that determinants have. While some of you may have been taught some rules for how to compute determinants of 2 by 2 and 3 by 3 matrices, I encourage you to understand how to compute determinants in general.   Computing Determinants   The determinant is a function from by matrices to the real numbers ( ). If is a 1 by 1 matrix, , then . For , the determinant of a by matrix is given by the following formula in terms of determinants of by matrices: where is the by matrix obtained by deleting the -th row and -th column of . The term is called the cofactor of .    The above definition uses cofactor expansion along the first row.  In this question, we will unpack the determinant formula above for a 2 by 2 matrix .  Rather than using the summation notation of the formula above, write out the two terms in .          Your answer to the previous problem will be useful in calculating determinants of 3 by 3 matrices. We will use the theorem below without proving it.    The determinant can be computed by cofactor expansion along any row or column. Specifically the cofactor expansion along the -th row is given by and the cofactor expansion along the -th column is given by .    Use cofactor expansion along the first column of to compute .  Use cofactor expansion along the second row of to compute . Did you get the same answer as the previous question?  Compute the determinant of . How does your answer compare with the previous problem?  Compute the determinant of .  Compute the determinant of .  Compute the determinant of the following matrices:    Properties of Determinants  Prove that if has a row of zeros, then .  Prove that .  We will now state several useful properties of determinants. We will defer the proofs until later in the course. You may use these theorems unless a problem specifically asks you to prove one of them , in which case, the problem will note that you may not use the theorem to prove it.  The determinants of elementary matrices have the following values:  If multiplies a row by a scalar , then .  If adds times a row to another row, then .  If swaps two rows, then .        If and are by , then .  The determinant of an upper or lower triangular matrix is the product of its diagonal entries.  The determinant of a diagonal matrix is the product of its diagonal entries. If is diagonal, then .   A matrix is invertible iff .      The final property of the theorem above should be included in !  Let be an matrix. We have that iff has solutions such that .   "
},
{
  "id": "ch_connecting_ideas-4-3-2",
  "level": "2",
  "url": "ch_connecting_ideas-4.html#ch_connecting_ideas-4-3-2",
  "type": "Definition",
  "number": "4.19",
  "title": "",
  "body": " The determinant is a function from by matrices to the real numbers ( ). If is a 1 by 1 matrix, , then . For , the determinant of a by matrix is given by the following formula in terms of determinants of by matrices: where is the by matrix obtained by deleting the -th row and -th column of . The term is called the cofactor of .   "
},
{
  "id": "ch_connecting_ideas-4-3-4",
  "level": "2",
  "url": "ch_connecting_ideas-4.html#ch_connecting_ideas-4-3-4",
  "type": "Question",
  "number": "4.32",
  "title": "",
  "body": "In this question, we will unpack the determinant formula above for a 2 by 2 matrix .  Rather than using the summation notation of the formula above, write out the two terms in .         "
},
{
  "id": "ch_connecting_ideas-4-3-6",
  "level": "2",
  "url": "ch_connecting_ideas-4.html#ch_connecting_ideas-4-3-6",
  "type": "Theorem",
  "number": "4.20",
  "title": "",
  "body": "  The determinant can be computed by cofactor expansion along any row or column. Specifically the cofactor expansion along the -th row is given by and the cofactor expansion along the -th column is given by .   "
},
{
  "id": "ch_connecting_ideas-4-3-7",
  "level": "2",
  "url": "ch_connecting_ideas-4.html#ch_connecting_ideas-4-3-7",
  "type": "Exercise",
  "number": "4.21",
  "title": "",
  "body": "Use cofactor expansion along the first column of to compute . "
},
{
  "id": "ch_connecting_ideas-4-3-8",
  "level": "2",
  "url": "ch_connecting_ideas-4.html#ch_connecting_ideas-4-3-8",
  "type": "Exercise",
  "number": "4.22",
  "title": "",
  "body": "Use cofactor expansion along the second row of to compute . Did you get the same answer as the previous question? "
},
{
  "id": "ch_connecting_ideas-4-3-9",
  "level": "2",
  "url": "ch_connecting_ideas-4.html#ch_connecting_ideas-4-3-9",
  "type": "Exercise",
  "number": "4.23",
  "title": "",
  "body": "Compute the determinant of . How does your answer compare with the previous problem? "
},
{
  "id": "ch_connecting_ideas-4-3-10",
  "level": "2",
  "url": "ch_connecting_ideas-4.html#ch_connecting_ideas-4-3-10",
  "type": "Exercise",
  "number": "4.24",
  "title": "",
  "body": "Compute the determinant of . "
},
{
  "id": "ch_connecting_ideas-4-3-11",
  "level": "2",
  "url": "ch_connecting_ideas-4.html#ch_connecting_ideas-4-3-11",
  "type": "Exercise",
  "number": "4.25",
  "title": "",
  "body": "Compute the determinant of . "
},
{
  "id": "ch_connecting_ideas-4-3-12",
  "level": "2",
  "url": "ch_connecting_ideas-4.html#ch_connecting_ideas-4-3-12",
  "type": "Exercise",
  "number": "4.26",
  "title": "",
  "body": "Compute the determinant of the following matrices: "
},
{
  "id": "ch_connecting_ideas-4-4-2",
  "level": "2",
  "url": "ch_connecting_ideas-4.html#ch_connecting_ideas-4-4-2",
  "type": "Question",
  "number": "4.33",
  "title": "",
  "body": "Prove that if has a row of zeros, then . "
},
{
  "id": "ch_connecting_ideas-4-4-3",
  "level": "2",
  "url": "ch_connecting_ideas-4.html#ch_connecting_ideas-4-4-3",
  "type": "Question",
  "number": "4.34",
  "title": "",
  "body": "Prove that . "
},
{
  "id": "ch_connecting_ideas-4-4-5",
  "level": "2",
  "url": "ch_connecting_ideas-4.html#ch_connecting_ideas-4-4-5",
  "type": "Theorem",
  "number": "4.27",
  "title": "",
  "body": "The determinants of elementary matrices have the following values:  If multiplies a row by a scalar , then .  If adds times a row to another row, then .  If swaps two rows, then .   "
},
{
  "id": "ch_connecting_ideas-4-4-6",
  "level": "2",
  "url": "ch_connecting_ideas-4.html#ch_connecting_ideas-4-4-6",
  "type": "Theorem",
  "number": "4.28",
  "title": "",
  "body": "    If and are by , then .  The determinant of an upper or lower triangular matrix is the product of its diagonal entries.  The determinant of a diagonal matrix is the product of its diagonal entries. If is diagonal, then .   A matrix is invertible iff .     "
},
{
  "id": "ee",
  "level": "2",
  "url": "ch_connecting_ideas-4.html#ee",
  "type": "Theorem",
  "number": "4.29",
  "title": "",
  "body": "Let be an matrix. We have that iff has solutions such that . "
},
{
  "id": "ch_connecting_ideas-5",
  "level": "1",
  "url": "ch_connecting_ideas-5.html",
  "type": "Section",
  "number": "4.4",
  "title": "Eigenvalues and Eigenvectors",
  "body": "Eigenvalues and Eigenvectors    An eigenvector of a matrix is a nonzero vector such that for some scalar . The scalar is called an eigenvalue of if there exists a nonzero solution to .    Which of the following vectors are an eigenvector of ? For any vectors that are eigenvectors of , give the eigenvalue. To speed things along, we are going to use SageMath cells embedded in the course notes. the code below sets up the computation that you need to do to answer the first part below. You may modify the code and click the button again (or type shift-return) to solve the other parts. If you mess up the code, just reload the page.          As a hint for the following two problems, it will suffice to try to find an eigenvector of the form . You might first convince yourself that for these matrices, no eigenvector can have first component .  Let . Try to find an eigenvector with eigenvalue . In other words, find a vector such that .  Let . Try to find an eigenvector with eigenvalue . In other words, find a vector such that .  As a hint to proving this, look back to  Let be a square matrix. We have that iff is an eigenvalue of .  If is a by matrix, then will be a -th degree polynomial in , which we call the characteristic polynomial of . The previous theorem shows that finding roots of the characteristic polynomial is the same as finding eigenvalues.  For each of the following matrices: write out the characteristic polynomial, give all eigenvalues, and for each eigenvalue, find an eigenvector. You should do the first two by hand to get a feel for finding the characteristic polynomial. After that, I have provided a SageMath cell you can modify to get the characteristic polynomial quickly, but you will need to work from there to find eigenvalues and eigenvectors.         Work smarter, not harder, on this part!  A root of a polynomial (in ) has (algebraic) multiplicity  if is the largest integer such that is a factor. Which, if any, of the eigenvalues you found above have algebraic multiplicity greater than ?     Prove that a nonzero vector, , is an eigenvector of with eigenvalue if and only if is in the null space of .    If is an eigenvector of with eigenvalue , then . By algebra, this means that , and hence . Thus, is in the null space of .   If , then . Hence, , or . Thus, is an eigenvector of with eigenvalue .    Prove that if is an eigenvector of , then is also an eigenvector of (when ).   Since is an eigenvector of , there is a scalar such that . By properties of matrix multiplication, we thus have . As , this shows that is an eigenvector with the same eigenvalue.    Prove that if and are eigenvectors of with the same eigenvalue, then is also an eigenvector of . What is the eigenvalue of ?   Let be the associated eigenvalue. We have that and . Thus, we have . Therefore, is an eigenvector with the same eigenvalue.      If is an eigenvalue of , then the eigenspace of , , is the set of vectors such that .    The previous two questions along with the inclusion of have proved the following theorem.   If is an eigenvalue of , then is a subspace of .    Prove that for every eigenvalue .   We prove this by contradiction. Suppose that there is an eigenspace with dimension . Then , since this is the only vector space of dimension . However, we now see that does not contain any nonzero vectors, and thus cannot contain any eigenvectors and therefore is not an eigenspace.     Let . Show that only has an eigenvalue of 2. What is the algebraic multiplicity of the eigenvalue 2?  Can you pick , , and , so that the eigenspace of 2 has dimension 3? If so, give a choice of , , and that does so.  Can you pick , , and , so that the eigenspace of 2 has dimension 2? If so, give a choice of , , and that does so.  Can you pick , , and , so that the eigenspace of 2 has dimension 1? If so, give a choice of , , and that does so.    Diagonalizability    A matrix is diagonalizable if there exists an invertible matrix such that where is a diagonal matrix.    We will not prove this theorem, but we will make use of it:    A matrix is diagonalizable iff has linearly independent eigenvectors. In fact, the matrix that will diagonalize will have the linearly independent eigenvectors as its columns.    The question becomes when can we find linearly independent eigenvectors for a matrix . It turns out that if you can find linearly independent eigenvectors for , then the matrix has columns given by these eigenvectors and the diagonal matrix will have the eigenvalues on the diagonal. In particular, if the -th column of has eigenvalue , then .  Can you diagonalize ? If so, give a basis of eigenvectors, give corresponding choices for , , and , then use these to demonstrate how .  Can you diagonalize ? If so, give a basis of eigenvectors, give corresponding choices for , , and , then use these to demonstrate how .  If is an eigenvector with eigenvalue and is an eigenvector with eigenvalue , then is linearly independent.  The following theorem relies on the preceding lemma and the fact that the dimension of every eigenspace is at least 1.    If a by matrix has distinct eigenvalues, then is diagonalizable.    The converse of this theorem is not true in that there diagonalizable matrices that do not have distinct eigenvalues. Give an example of a matrix that is diagonalizable but does not have distinct eigenvalues. Remember that diagonal matrices are diagonalizable.    A by matrix is diagonalizable if and only if the sums of the dimensions of its eigenspaces is .    Give an example of a matrix (with real eigenvalues) that is not diagonalizable. Justify your claim.  Let be a by matrix.  How many eigenvalues can have?   For each of the possible number of eigenvalues in the previous part, write out all of the possible dimensions of each of the eigenspaces. For instance: if has 4 distinct eigenvalues, then the only possibility is that each eigenspace has dimension 1 (why is that?).  Which of the cases from the previous problem correspond to being diagonalizable?     Let . Diagonalize and use your diagonalization to compute .     "
},
{
  "id": "ch_connecting_ideas-5-2",
  "level": "2",
  "url": "ch_connecting_ideas-5.html#ch_connecting_ideas-5-2",
  "type": "Definition",
  "number": "4.30",
  "title": "",
  "body": "  An eigenvector of a matrix is a nonzero vector such that for some scalar . The scalar is called an eigenvalue of if there exists a nonzero solution to .   "
},
{
  "id": "ch_connecting_ideas-5-3",
  "level": "2",
  "url": "ch_connecting_ideas-5.html#ch_connecting_ideas-5-3",
  "type": "Question",
  "number": "4.35",
  "title": "",
  "body": "Which of the following vectors are an eigenvector of ? For any vectors that are eigenvectors of , give the eigenvalue. To speed things along, we are going to use SageMath cells embedded in the course notes. the code below sets up the computation that you need to do to answer the first part below. You may modify the code and click the button again (or type shift-return) to solve the other parts. If you mess up the code, just reload the page.         "
},
{
  "id": "ch_connecting_ideas-5-5",
  "level": "2",
  "url": "ch_connecting_ideas-5.html#ch_connecting_ideas-5-5",
  "type": "Question",
  "number": "4.36",
  "title": "",
  "body": "Let . Try to find an eigenvector with eigenvalue . In other words, find a vector such that . "
},
{
  "id": "ch_connecting_ideas-5-6",
  "level": "2",
  "url": "ch_connecting_ideas-5.html#ch_connecting_ideas-5-6",
  "type": "Question",
  "number": "4.37",
  "title": "",
  "body": "Let . Try to find an eigenvector with eigenvalue . In other words, find a vector such that . "
},
{
  "id": "ch_connecting_ideas-5-8",
  "level": "2",
  "url": "ch_connecting_ideas-5.html#ch_connecting_ideas-5-8",
  "type": "Theorem",
  "number": "4.31",
  "title": "",
  "body": "Let be a square matrix. We have that iff is an eigenvalue of . "
},
{
  "id": "ch_connecting_ideas-5-9",
  "level": "2",
  "url": "ch_connecting_ideas-5.html#ch_connecting_ideas-5-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "characteristic polynomial of "
},
{
  "id": "ch_connecting_ideas-5-10",
  "level": "2",
  "url": "ch_connecting_ideas-5.html#ch_connecting_ideas-5-10",
  "type": "Question",
  "number": "4.38",
  "title": "",
  "body": "For each of the following matrices: write out the characteristic polynomial, give all eigenvalues, and for each eigenvalue, find an eigenvector. You should do the first two by hand to get a feel for finding the characteristic polynomial. After that, I have provided a SageMath cell you can modify to get the characteristic polynomial quickly, but you will need to work from there to find eigenvalues and eigenvectors.         Work smarter, not harder, on this part!  A root of a polynomial (in ) has (algebraic) multiplicity  if is the largest integer such that is a factor. Which, if any, of the eigenvalues you found above have algebraic multiplicity greater than ?   "
},
{
  "id": "ch_connecting_ideas-5-11",
  "level": "2",
  "url": "ch_connecting_ideas-5.html#ch_connecting_ideas-5-11",
  "type": "Question",
  "number": "4.39",
  "title": "",
  "body": "Prove that a nonzero vector, , is an eigenvector of with eigenvalue if and only if is in the null space of .    If is an eigenvector of with eigenvalue , then . By algebra, this means that , and hence . Thus, is in the null space of .   If , then . Hence, , or . Thus, is an eigenvector of with eigenvalue .   "
},
{
  "id": "ch_connecting_ideas-5-12",
  "level": "2",
  "url": "ch_connecting_ideas-5.html#ch_connecting_ideas-5-12",
  "type": "Question",
  "number": "4.40",
  "title": "",
  "body": "Prove that if is an eigenvector of , then is also an eigenvector of (when ).   Since is an eigenvector of , there is a scalar such that . By properties of matrix multiplication, we thus have . As , this shows that is an eigenvector with the same eigenvalue.   "
},
{
  "id": "ch_connecting_ideas-5-13",
  "level": "2",
  "url": "ch_connecting_ideas-5.html#ch_connecting_ideas-5-13",
  "type": "Question",
  "number": "4.41",
  "title": "",
  "body": "Prove that if and are eigenvectors of with the same eigenvalue, then is also an eigenvector of . What is the eigenvalue of ?   Let be the associated eigenvalue. We have that and . Thus, we have . Therefore, is an eigenvector with the same eigenvalue.   "
},
{
  "id": "ch_connecting_ideas-5-14",
  "level": "2",
  "url": "ch_connecting_ideas-5.html#ch_connecting_ideas-5-14",
  "type": "Definition",
  "number": "4.32",
  "title": "",
  "body": "  If is an eigenvalue of , then the eigenspace of , , is the set of vectors such that .   "
},
{
  "id": "ch_connecting_ideas-5-16",
  "level": "2",
  "url": "ch_connecting_ideas-5.html#ch_connecting_ideas-5-16",
  "type": "Theorem",
  "number": "4.33",
  "title": "",
  "body": " If is an eigenvalue of , then is a subspace of .   "
},
{
  "id": "ch_connecting_ideas-5-17",
  "level": "2",
  "url": "ch_connecting_ideas-5.html#ch_connecting_ideas-5-17",
  "type": "Question",
  "number": "4.42",
  "title": "",
  "body": "Prove that for every eigenvalue .   We prove this by contradiction. Suppose that there is an eigenspace with dimension . Then , since this is the only vector space of dimension . However, we now see that does not contain any nonzero vectors, and thus cannot contain any eigenvectors and therefore is not an eigenspace.   "
},
{
  "id": "q92",
  "level": "2",
  "url": "ch_connecting_ideas-5.html#q92",
  "type": "Question",
  "number": "4.43",
  "title": "",
  "body": " Let . Show that only has an eigenvalue of 2. What is the algebraic multiplicity of the eigenvalue 2?  Can you pick , , and , so that the eigenspace of 2 has dimension 3? If so, give a choice of , , and that does so.  Can you pick , , and , so that the eigenspace of 2 has dimension 2? If so, give a choice of , , and that does so.  Can you pick , , and , so that the eigenspace of 2 has dimension 1? If so, give a choice of , , and that does so.  "
},
{
  "id": "ch_connecting_ideas-5-19-2",
  "level": "2",
  "url": "ch_connecting_ideas-5.html#ch_connecting_ideas-5-19-2",
  "type": "Definition",
  "number": "4.34",
  "title": "",
  "body": "  A matrix is diagonalizable if there exists an invertible matrix such that where is a diagonal matrix.   "
},
{
  "id": "ch_connecting_ideas-5-19-4",
  "level": "2",
  "url": "ch_connecting_ideas-5.html#ch_connecting_ideas-5-19-4",
  "type": "Theorem",
  "number": "4.35",
  "title": "",
  "body": "  A matrix is diagonalizable iff has linearly independent eigenvectors. In fact, the matrix that will diagonalize will have the linearly independent eigenvectors as its columns.   "
},
{
  "id": "ch_connecting_ideas-5-19-6",
  "level": "2",
  "url": "ch_connecting_ideas-5.html#ch_connecting_ideas-5-19-6",
  "type": "Question",
  "number": "4.44",
  "title": "",
  "body": "Can you diagonalize ? If so, give a basis of eigenvectors, give corresponding choices for , , and , then use these to demonstrate how . "
},
{
  "id": "q14",
  "level": "2",
  "url": "ch_connecting_ideas-5.html#q14",
  "type": "Question",
  "number": "4.45",
  "title": "",
  "body": "Can you diagonalize ? If so, give a basis of eigenvectors, give corresponding choices for , , and , then use these to demonstrate how . "
},
{
  "id": "ch_connecting_ideas-5-19-8",
  "level": "2",
  "url": "ch_connecting_ideas-5.html#ch_connecting_ideas-5-19-8",
  "type": "Lemma",
  "number": "4.36",
  "title": "",
  "body": "If is an eigenvector with eigenvalue and is an eigenvector with eigenvalue , then is linearly independent. "
},
{
  "id": "ch_connecting_ideas-5-19-10",
  "level": "2",
  "url": "ch_connecting_ideas-5.html#ch_connecting_ideas-5-19-10",
  "type": "Theorem",
  "number": "4.37",
  "title": "",
  "body": "  If a by matrix has distinct eigenvalues, then is diagonalizable.   "
},
{
  "id": "ch_connecting_ideas-5-19-11",
  "level": "2",
  "url": "ch_connecting_ideas-5.html#ch_connecting_ideas-5-19-11",
  "type": "Question",
  "number": "4.46",
  "title": "",
  "body": "The converse of this theorem is not true in that there diagonalizable matrices that do not have distinct eigenvalues. Give an example of a matrix that is diagonalizable but does not have distinct eigenvalues. Remember that diagonal matrices are diagonalizable. "
},
{
  "id": "ch_connecting_ideas-5-19-12",
  "level": "2",
  "url": "ch_connecting_ideas-5.html#ch_connecting_ideas-5-19-12",
  "type": "Theorem",
  "number": "4.38",
  "title": "",
  "body": "  A by matrix is diagonalizable if and only if the sums of the dimensions of its eigenspaces is .   "
},
{
  "id": "ch_connecting_ideas-5-19-13",
  "level": "2",
  "url": "ch_connecting_ideas-5.html#ch_connecting_ideas-5-19-13",
  "type": "Question",
  "number": "4.47",
  "title": "",
  "body": "Give an example of a matrix (with real eigenvalues) that is not diagonalizable. Justify your claim. "
},
{
  "id": "ch_connecting_ideas-5-19-14",
  "level": "2",
  "url": "ch_connecting_ideas-5.html#ch_connecting_ideas-5-19-14",
  "type": "Question",
  "number": "4.48",
  "title": "",
  "body": "Let be a by matrix.  How many eigenvalues can have?   For each of the possible number of eigenvalues in the previous part, write out all of the possible dimensions of each of the eigenspaces. For instance: if has 4 distinct eigenvalues, then the only possibility is that each eigenspace has dimension 1 (why is that?).  Which of the cases from the previous problem correspond to being diagonalizable?  "
},
{
  "id": "ch_connecting_ideas-5-19-15",
  "level": "2",
  "url": "ch_connecting_ideas-5.html#ch_connecting_ideas-5-19-15",
  "type": "Question",
  "number": "4.49",
  "title": "",
  "body": "  Let . Diagonalize and use your diagonalization to compute .   "
},
{
  "id": "ch_inner_products-2",
  "level": "1",
  "url": "ch_inner_products-2.html",
  "type": "Section",
  "number": "5.1",
  "title": "Inner Products",
  "body": " Inner Products  Recall the dot product of and is the sum of the products of the components. Namely, . The dot product of a vector with itself gives the length of the vector squared, . The dot product is the familiar example of an inner product on a real vector space.  If , the conjugate of is denoted and computed as .    An inner product on a vector space is a function from to for real vector spaces ( for complex vector spaces), denoted by , such that for all and (or ):  (or for )  and   A vector space with a defined inner product is called an inner product space .       with the dot product defined above is an inner product space.  , the set of continuous functions on the interval , is an inner product space when  Frobeinus Inner Product on Matrices: If , then is an inner product on .       Two non-zero vectors and in an inner product space are orthogonal if .    Find 3 different vectors in that are orthogonal to .  Find 3 different vectors in that are orthogonal to .    Find a nonzero vector in that is orthogonal to .    Find a nonzero vector in that is orthogonal to .  Find a nonzero vector in that is orthogonal to .    For vectors in , the projection of onto computed with the following: .     Compute with and .   Plot , , and starting at the origin.  Write a few sentences about what the projection measures geometrically.   Inner product spaces are useful because the same argument we made in the previous problem about how much of one vector is in the direction of another can be generalized to vector spaces that do not have the geometric interpretation of arrows in space.  "
},
{
  "id": "ch_inner_products-2-3",
  "level": "2",
  "url": "ch_inner_products-2.html#ch_inner_products-2-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "conjugate of "
},
{
  "id": "ch_inner_products-2-4",
  "level": "2",
  "url": "ch_inner_products-2.html#ch_inner_products-2-4",
  "type": "Definition",
  "number": "5.1",
  "title": "",
  "body": "  An inner product on a vector space is a function from to for real vector spaces ( for complex vector spaces), denoted by , such that for all and (or ):  (or for )  and   A vector space with a defined inner product is called an inner product space .   "
},
{
  "id": "ch_inner_products-2-5",
  "level": "2",
  "url": "ch_inner_products-2.html#ch_inner_products-2-5",
  "type": "Example",
  "number": "5.2",
  "title": "",
  "body": "   with the dot product defined above is an inner product space.  , the set of continuous functions on the interval , is an inner product space when  Frobeinus Inner Product on Matrices: If , then is an inner product on .    "
},
{
  "id": "ch_inner_products-2-6",
  "level": "2",
  "url": "ch_inner_products-2.html#ch_inner_products-2-6",
  "type": "Definition",
  "number": "5.3",
  "title": "",
  "body": "  Two non-zero vectors and in an inner product space are orthogonal if .   "
},
{
  "id": "ch_inner_products-2-7",
  "level": "2",
  "url": "ch_inner_products-2.html#ch_inner_products-2-7",
  "type": "Question",
  "number": "5.1",
  "title": "",
  "body": "Find 3 different vectors in that are orthogonal to . "
},
{
  "id": "ch_inner_products-2-8",
  "level": "2",
  "url": "ch_inner_products-2.html#ch_inner_products-2-8",
  "type": "Exercise",
  "number": "5.4",
  "title": "",
  "body": "Find 3 different vectors in that are orthogonal to . "
},
{
  "id": "ch_inner_products-2-9",
  "level": "2",
  "url": "ch_inner_products-2.html#ch_inner_products-2-9",
  "type": "Question",
  "number": "5.2",
  "title": "",
  "body": "  Find a nonzero vector in that is orthogonal to .   "
},
{
  "id": "ch_inner_products-2-10",
  "level": "2",
  "url": "ch_inner_products-2.html#ch_inner_products-2-10",
  "type": "Question",
  "number": "5.3",
  "title": "",
  "body": "Find a nonzero vector in that is orthogonal to . "
},
{
  "id": "ch_inner_products-2-11",
  "level": "2",
  "url": "ch_inner_products-2.html#ch_inner_products-2-11",
  "type": "Exercise",
  "number": "5.5",
  "title": "",
  "body": "Find a nonzero vector in that is orthogonal to . "
},
{
  "id": "ch_inner_products-2-12",
  "level": "2",
  "url": "ch_inner_products-2.html#ch_inner_products-2-12",
  "type": "Definition",
  "number": "5.6",
  "title": "",
  "body": "  For vectors in , the projection of onto computed with the following: .   "
},
{
  "id": "ch_inner_products-2-13",
  "level": "2",
  "url": "ch_inner_products-2.html#ch_inner_products-2-13",
  "type": "Question",
  "number": "5.4",
  "title": "",
  "body": " Compute with and .   Plot , , and starting at the origin.  Write a few sentences about what the projection measures geometrically.  "
},
{
  "id": "ch_inner_products-3",
  "level": "1",
  "url": "ch_inner_products-3.html",
  "type": "Section",
  "number": "5.2",
  "title": "Orthogonal Complements",
  "body": " Orthogonal Complements  A set of vectors is orthogonal if every pair of distinct vectors in the set is orthogonal.  Give an orthogonal set of 3 non-zero vectors in .  Let be a subspace of an inner product space . The orthogonal complement of , denoted , is the set of vectors in that are orthogonal to every vector in . We read as perp .  Let . What is ?  Let . What is ?  Let be a subspace of . What is ?  Prove that if is a subspace of an inner product space , then is a subspace of .  "
},
{
  "id": "ch_inner_products-3-2",
  "level": "2",
  "url": "ch_inner_products-3.html#ch_inner_products-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "orthogonal "
},
{
  "id": "ch_inner_products-3-3",
  "level": "2",
  "url": "ch_inner_products-3.html#ch_inner_products-3-3",
  "type": "Question",
  "number": "5.5",
  "title": "",
  "body": "Give an orthogonal set of 3 non-zero vectors in . "
},
{
  "id": "ch_inner_products-3-4",
  "level": "2",
  "url": "ch_inner_products-3.html#ch_inner_products-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "orthogonal complement "
},
{
  "id": "ch_inner_products-3-5",
  "level": "2",
  "url": "ch_inner_products-3.html#ch_inner_products-3-5",
  "type": "Question",
  "number": "5.6",
  "title": "",
  "body": "Let . What is ? "
},
{
  "id": "ch_inner_products-3-6",
  "level": "2",
  "url": "ch_inner_products-3.html#ch_inner_products-3-6",
  "type": "Question",
  "number": "5.7",
  "title": "",
  "body": "Let . What is ? "
},
{
  "id": "ch_inner_products-3-7",
  "level": "2",
  "url": "ch_inner_products-3.html#ch_inner_products-3-7",
  "type": "Question",
  "number": "5.8",
  "title": "",
  "body": "Let be a subspace of . What is ? "
},
{
  "id": "ch_inner_products-3-8",
  "level": "2",
  "url": "ch_inner_products-3.html#ch_inner_products-3-8",
  "type": "Question",
  "number": "5.9",
  "title": "",
  "body": "Prove that if is a subspace of an inner product space , then is a subspace of . "
},
{
  "id": "ch_inner_products-4",
  "level": "1",
  "url": "ch_inner_products-4.html",
  "type": "Section",
  "number": "5.3",
  "title": "Orthonormal Bases",
  "body": " Orthonormal Bases  The elementary vectors of , , form a basis for . Even better than that, the basis has only unit vectors and is orthogonal as a set (each pair of vectors is orthogonal to each other). These properties are very fundamental to how you worked with vectors before you started this class and why has such nice geometric intuition built in. The fundamental idea of this section is understanding a procedure for how to build a basis that is an orthogonal set and has vectors of length one.  In this question, you will build an orthonormal basis of from the ordered set . Orthonormal means that the set is orthogonal and contains only unit vectors.  We will construct the orthonormal basis by going through the elements in in order. In other words, we will consider first. Find , a unit vector in the direction of . This will be our first unit basis vector in .  We now want to consider . Is orthogonal to ?  We didn't get lucky, so we will have to take out the part of that is not orthogonal to . In other words, we need to find the projection of onto . Compute .  In order to take out the part of that is not orthogonal to , we should subtract from . Find and verify that this difference is orthogonal to .  Since is orthogonal to , we define be the unit vector in the direction of . Write out the set .  All that's left to do is take and make , a unit vector that is orthogonal to both and . Find the appropriate projections of in order to subtract out the parts of that is not orthogonal to and . Then find the unit vector in the direction of the difference to get .  Verify that is an orthonormal basis for .   Go through the same process above to create an orthonormal basis of from the basis using the inner product and projection formula given by and   "
},
{
  "id": "ch_inner_products-4-3",
  "level": "2",
  "url": "ch_inner_products-4.html#ch_inner_products-4-3",
  "type": "Question",
  "number": "5.10",
  "title": "",
  "body": "In this question, you will build an orthonormal basis of from the ordered set . Orthonormal means that the set is orthogonal and contains only unit vectors.  We will construct the orthonormal basis by going through the elements in in order. In other words, we will consider first. Find , a unit vector in the direction of . This will be our first unit basis vector in .  We now want to consider . Is orthogonal to ?  We didn't get lucky, so we will have to take out the part of that is not orthogonal to . In other words, we need to find the projection of onto . Compute .  In order to take out the part of that is not orthogonal to , we should subtract from . Find and verify that this difference is orthogonal to .  Since is orthogonal to , we define be the unit vector in the direction of . Write out the set .  All that's left to do is take and make , a unit vector that is orthogonal to both and . Find the appropriate projections of in order to subtract out the parts of that is not orthogonal to and . Then find the unit vector in the direction of the difference to get .  Verify that is an orthonormal basis for .  "
},
{
  "id": "ch_inner_products-4-4",
  "level": "2",
  "url": "ch_inner_products-4.html#ch_inner_products-4-4",
  "type": "Question",
  "number": "5.11",
  "title": "",
  "body": "Go through the same process above to create an orthonormal basis of from the basis using the inner product and projection formula given by and  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
