import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
	getStyle = () => {
		return {
			background: '#eee',
			padding: '10px',
			borderBottom: '1px #ccc solid',
			textDecoration: this.props.todo.completed ? 'line-through' : 'none'
		};
	};

	render() {
		const { id, title } = this.props.todo;
		return (
			<div style={this.getStyle()}>
				<p>
					<input type='checkbox' onChange={() => this.props.markComplete(id)} />
					{title}
				</p>
			</div>
		);
	}
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
};

export default TodoItem;
