import { Fragment } from "react"
import PropTypes from 'prop-types'
export const Card = (props) => {
  return (
    <Fragment>
        <a href={"https://leetcode.com/u/" + props.leetCodeIds.leetcodeId} target="_blank">
            <div className="card-container">
                <h1 className="leetcode">LeetCode ID</h1>
                <h1 className="leetcodeId">{props.leetCodeIds.leetcodeId}</h1>
                <img className="profileImage" src={props.leetCodeIds.profileImage} alt="profile1" />
                <div className="profileName">{props.leetCodeIds.name}</div>
                <div className="city">{props.leetCodeIds.city}</div>
                <div className="skill">{props.leetCodeIds.skill}</div>
                <div className="problems">#{props.leetCodeIds.problems}</div> <div className="solved">Problems</div> 
                <hr />
                <div className="language">Languages : </div>
                <ul className="unorderList">
                    {
                        props.leetCodeIds.languages.map((item,key) => (
                            <li key={key}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        </a>
    </Fragment>
  )
}

Card.propTypes = {
    leetCodeIds:PropTypes.shape({
        profileImage:PropTypes.string.isRequired,
        leetcodeId:PropTypes.string.isRequired,
        name:PropTypes.string.isRequired,
        city:PropTypes.string.isRequired,
        skill:PropTypes.string.isRequired,
        problems:PropTypes.number.isRequired,
        languages:PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
}
