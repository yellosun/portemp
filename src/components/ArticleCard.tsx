import React, { Component } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'

interface Props {classes: any}
interface State {}

const styles = createStyles({

})

class ArticleCard extends Component<Props, State> {
	render() {
		const {classes, img, link, title} = this.props
		console.log(title)
		return (
			<div>
				
			</div>
		)
	}
}

export default withStyles(styles)(ArticleCard)