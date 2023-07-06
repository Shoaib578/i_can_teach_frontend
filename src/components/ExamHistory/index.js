import React from "react";
import './index.css'

const ExamHistory = () => {
    return (
        <div className="ExamDetails">
            <div className="ExamDetailsHeader">
                <p className="ExamDetailsTitle">Exam History</p>
                <p className="ExamDetailsDescription">CompTIA SY0-501 - CompTIA Security+ Certification Exam</p>
            </div>

<table>
  <tr>
    <td>Test</td>
    <td>Date/Time</td>
    <td>Questions</td>
    <td>Correct</td>
    <td>TimeLeft</td>
  </tr>
  {/* <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr> */}
  
</table>

        </div>
    )
}

export default ExamHistory