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

  handleSaveMember(member) {
    this.setState({
      members: this.state.members.concat([member])
    });
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
          </section>
          <section>
            <h2>
              new member
            </h2>
            <MemberForm onSave={this.handleSaveMember.bind(this)}/>
          </section>
        </main>
      </Fragment>
    )
  }
}

class MemberForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      original: {
        name: props.member.name,
      },
      current: {
        name: props.member.name,
      }
    };
  }

  static defaultProps = {
    member: {
      name: ''
    }
  };

  handleSubmit(event) {
    const { current, original } = this.state;

    MembersService.createMember(current).then(
      (member) => {
        this.props.onSave(member);
        this.setState({ current: original });
      }
    );

    event.preventDefault();
  }

  handleNameChange(event) {
    const name = event.target.value;

    this.setState({ current: { name } });
  }

  handleReset(event) {
    const original = this.state.original;

    this.setState({ current: original });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} onReset={this.handleReset.bind(this)}>
        <label>
          <span>
            name
          </span>
          <input type='text' value={this.state.current.name} onChange={this.handleNameChange.bind(this)} />
        </label>
        <button type='submit'>
          save
        </button>
        <button type='reset'>
          cancel
        </button>
      </form>
    );
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
