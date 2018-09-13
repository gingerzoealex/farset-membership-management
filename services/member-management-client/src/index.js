import ReactDOM from 'react-dom';
import React, { Fragment } from 'react';

class MemberManagementPage extends React.Component {
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
            <ul>
              <li>
                <button>delete</button>
                <button>edit</button>
                <span>olga rios</span>
              </li>
              <li>
                <button>delete</button>
                <button>edit</button>
                <span>mitchell simpson</span>
              </li>
              <li>
                <button>delete</button>
                <button>edit</button>
                <span>gwendolyn carlson</span>
              </li>
            </ul>
            <footer>
              <button>add member</button>
            </footer>
          </section>
        </main>
      </Fragment>
    )
  }
}

ReactDOM.render(<MemberManagementPage />, document.getElementById('root'));
