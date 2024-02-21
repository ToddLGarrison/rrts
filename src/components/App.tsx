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
    componentDidMount() {
        this.props.fetchTodos();
    }

    render () {
        return (
            <div>
                Hi There!
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