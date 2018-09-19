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

  handleUpdateMember(id, { name, email }) {
    this.setState({
      members: this.state.members.map((member) => member.id !== id ? member : { id, name, email })
    })
  }

  handleDeleteMember(id) {
    this.setState({
      members: this.state.members.filter((member) => id !== member.id)
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
            <Members onUpdate={this.handleUpdateMember.bind(this)} onDelete={this.handleDeleteMember.bind(this)} members={this.state.members} />
          </section>
          <section>
            <h2>
              new member
            </h2>
            <NewMemberForm onSave={this.handleSaveMember.bind(this)}/>
          </section>
        </main>
      </Fragment>
    )
  }
}

class NewMemberForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      original: {
        name: props.member.name,
        email: props.member.email
      },
      current: {
        name: props.member.name,
        email: props.member.email
      }
    };
  }

  static defaultProps = {
    member: {
      name: '',
      email: ''
    }
  };

  handleSubmit(event) {
    const { current, original } = this.state;

    console.log(current);

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
    const email = this.state.current.email;

    this.setState({ current: { name, email } });
  }

  handleEmailChange(event) {
    const email = event.target.value;
    const name = this.state.current.name;

    this.setState({ current: { name, email } });
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
        <label>
          <span>
            email
          </span>
          <input type='text' value={this.state.current.email} onChange={this.handleEmailChange.bind(this)} />
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

class EditMemberForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      original: {
        name: props.member.name,
        email: props.member.email
      },
      current: {
        name: props.member.name,
        email: props.member.email
      }
    };
  }

  handleSubmit(event) {
    const { current } = this.state;

    MembersService.updateMember(this.props.member.id, current).then(
      (member) => {
        this.props.onSave(this.props.member.id, member);
        this.setState({ original: current });
      }
    );

    event.preventDefault();
  }

  handleNameChange(event) {
    const name = event.target.value;
    const email = this.state.current.email;

    this.setState({ current: { name, email } });
  }

  handleEmailChange(event) {
    const email = event.target.value;
    const name = this.state.current.name;

    this.setState({ current: { name, email } });
  }

  handleReset(event) {
    const original = this.state.original;

    this.setState({ current: original });

    this.props.onCancel();
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
        <label>
          <span>
            email
          </span>
          <input type='text' value={this.state.current.email} onChange={this.handleEmailChange.bind(this)} />
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

function Members({ onUpdate, onDelete, members }) {
  if (members === undefined) return null;

  return (
    <ul>
      {
        members.map(
          (member) => <Member key={member.id} member={member} onUpdate={onUpdate} onDelete={onDelete} />
        )
      }
    </ul>
  );
}

class Member extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editing: false };
  }

  handleDeleteMember() {
    MembersService.deleteMember(this.props.member.id).then(
      () => this.props.onDelete(this.props.member.id)
    );
  }

  handleEditMember() {
    this.setState({ editing: true });
  }

  handleUpdateMember(id, member) {
    this.props.onUpdate(id, member);
    this.setState({ editing: false });
  }

  handleReset() {
    this.setState({ editing: false });
  }

  render() {
    if (this.state.editing) return (
      <li>
        <EditMemberForm onCancel={this.handleReset.bind(this)} onSave={this.handleUpdateMember.bind(this)} member={this.props.member} />
      </li>
    );

    return (
      <li>
        <button onClick={this.handleDeleteMember.bind(this)}>delete</button>
        <button onClick={this.handleEditMember.bind(this)}>edit</button>
        <span>{`${this.props.member.name || 'no name'}, ${this.props.member.email || 'no email'}`}</span>
      </li>
    );
  }
}

ReactDOM.render(<MemberManagementPage />, document.getElementById('root'));
