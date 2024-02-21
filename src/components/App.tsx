import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
    todos: Todo[];
    fetchTodos(): any;
}

//dont want to export this one so to avoid confusion alternative name
class _App extends React.Component<AppProps> {
    onButtonClick = (): void => {
        this.props.fetchTodos();
    }

    renderList(): JSX.Element[] {
        return this.props.todos.map((todo: Todo) => {
            return <div key={todo.id}>{todo.id}: {todo.title}</div>
        })
    }

    render () {
        return (
            <div>
                <button onClick={this.onButtonClick}>
                    Fetch!!
                </button>
                {this.renderList()}
            </div>
        )
    }
}

//destructure todos
const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
    return { todos };
};

export const App = connect(
    mapStateToProps,
    { fetchTodos }
)(_App)