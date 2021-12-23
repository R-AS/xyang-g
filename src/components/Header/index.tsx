import * as React from 'react'
import PropTypes from 'prop-types'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import { Link } from 'gatsby'
import './index.less'

interface IProps {
  siteTitle: string
}

const Header = (props: IProps) => {
  const { siteTitle = '' } = props

  return (
    <Grid className='h-container'>
      <GridRow>
        <GridColumn>
          <Link className='h-title' to='/'>{siteTitle}</Link>
        </GridColumn>
      </GridRow>
    </Grid>
  )
}

export default Header
