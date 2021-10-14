import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import FeedbackOptions from './FeedbackOptions';
import Statistic from './Statistic';

class Feedback extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  //   static propTypes = {};

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  handleGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };

  handleNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };

  handleBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = () => {
    this.setState(() => ({
      total: this.state.good + this.state.neutral + this.state.bad,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    console.log(this.state);
  };

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;

    return (
      <div className="container">
        <h2 className="title">Please leave your feedback</h2>
        <FeedbackOptions
          options={this.state}
          onGood={this.handleGood}
          onNeutral={this.handleNeutral}
          onBad={this.handleBad}
        />
        <h2 className="title">Statistics</h2>
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
        />
      </div>
    );
  }
}

export default Feedback;

// ==============================================
// import PropTypes from 'prop-types';
// import s from './Profile.module.css';

// export default function Profile({ name, tag, location, avatar, stats }) {
//   return (
//     <div className={s.container}>
//       <div className={s.wrapper}>
//         <div className={s.description}>
//           <img src={avatar} alt={name} className={s.avatar} />
//           <p className={s.name}>{name}</p>
//           <p className={s.tag}>{'@' + tag}</p>
//           <p className={s.location}>{location}</p>
//         </div>
//         <ul className={s.list}>
//           <li className={s.item}>
//             <span className={s.label}>Followers</span>
//             <span className={s.quantity}>{stats.followers}</span>
//           </li>
//           <li className={s.item}>
//             <span className={s.label}>Views</span>
//             <span className={s.quantity}>{stats.views}</span>
//           </li>
//           <li className={s.item}>
//             <span className={s.label}>Likes</span>
//             <span className={s.quantity}>{stats.likes}</span>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// Profile.propTypes = {
//   name: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   stats: PropTypes.object.isRequired,
// };
