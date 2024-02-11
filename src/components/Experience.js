import { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import Job_exp from './Job_exp'
import Job_banner from './Job_banner'
import '../css/Experience.css'


class MenuExampleVerticalSecondary extends Component {

	constructor(props) {
		super(props);
		this.state = {
			activeItem: 'BGC Engineering',
		};
		this.handleItemClick = this.handleItemClick.bind(this);
	}

	handleItemClick(e, { name }) {
		this.setState({ 
			activeItem: name,
		});
	}

	render() {
		const { activeItem } = this.state

		return (
			<div className='experience'>

				<div className='title_row'>
					<h1>
						<hr className='left_line' />
						Experience
						<hr className='right_line'/>
					</h1>
					<p>Places I've worked</p>
				</div>	

				<div className='column_25'>
					
					<Job_banner name = {this.state.activeItem} />

					<div className='column_25_menu'>
						<Menu pointing secondary vertical size='large'>
							<Menu.Item id="exp3"
								name='BGC Engineering'
								active={activeItem === 'BGC Engineering'}
								onClick={this.handleItemClick}
							/>
							<Menu.Item id="exp4"
								name='Accountium'
								active={activeItem === 'Accountium'}
								onClick={this.handleItemClick}
							/>
							<Menu.Item id="exp1"
								name='University of Alberta'
								active={activeItem === 'University of Alberta'}
								onClick={this.handleItemClick}
							/>
							<Menu.Item id="exp2"
								name='Deloitte'
								active={activeItem === 'Deloitte'}
								onClick={this.handleItemClick}
							/>
						</Menu>
					</div>
					
				</div>
				<div className='column_75'>
					<div className='column_75_exp'>
						<Job_exp name = {this.state.activeItem} />
					</div>
				</div>
			</div>
			
		)
	}
}

export default MenuExampleVerticalSecondary