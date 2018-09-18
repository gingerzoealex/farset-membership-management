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

  handleUpdateMember(id, { name }) {
    this.setState({
      members: this.state.members.map((member) => member.id !== id ? member : { id, name })
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

class EditMemberForm extends React.Component {
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

  handleSubmit(event) {
    const { current, original } = this.state;

    MembersService.updateMember(this.props.member.id, current).then(
      (member) => {
        this.props.onSave(this.props.member.id, member);
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
    MembersService.deleteMember(this.props.id).then(
      () => this.props.onDelete(this.props.id)
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
        <span>{this.props.member.name}</span>
      </li>
    );
  }
}

ReactDOM.render(<MemberManagementPage />, document.getElementById('root'));
