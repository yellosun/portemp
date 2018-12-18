import React, { Component } from 'react'
import { withStyles, createStyles, Theme } from '@material-ui/core/styles'

import ProjCard from './ProjCard'
import { projs } from '../ProjList' 

interface Props {classes: any}
interface State {}

const styles = createStyles({
	cardContainer: {
		display: 'flex',
		flexFlow: 'row wrap',
		justifyContent: 'center',
	},
})


class Name extends Component<Props, State> {

	render() {
		console.log(projs)
		const {classes} = this.props
		return (
			<div className={classes.cardContainer}>
			{Object.keys(projs).map((p, i)=> {
				return <ProjCard key={i} img={projs[p].img} title={p} desc={projs[p].desc} link1={projs[p].link1} link2={projs[p].link2} />
			})
			}

			</div>
		)
	}
}

export default withStyles(styles)(Name)