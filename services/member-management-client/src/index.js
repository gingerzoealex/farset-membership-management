import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';
import * as MembersService from './members-service';

class MemberManagementPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  componentDidMount() {
    MembersService.getMembers().then(
      (members) => this.setState({ members })
    );
  }

  render() {
    return (
      <Fragment>
        <header>
          <h1>
            member management
          </h1>
        </header>
        <main>
          <section>
            <header>
              <h2>
                members
              </h2>
            </header>
            <Members members={this.state.members} />
            <footer>
              <button>add member</button>
            </footer>
          </section>
        </main>
      </Fragment>
    )
  }
}

function Members({ members }) {
  if (members === undefined) return null;

  return (
    <ul>
      {
        members.map(
          ({ name }) => <Member name={name} />
        )
      }
    </ul>
  );
}

function Member({ name }) {
  return (
    <li>
      <button>delete</button>
      <button>edit</button>
      <span>{name}</span>
    </li>
  );
}

ReactDOM.render(<MemberManagementPage />, document.getElementById('root'));
