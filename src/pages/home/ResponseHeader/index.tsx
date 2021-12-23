import React from 'react'
import { Grid, GridColumn, GridRow, Image } from 'semantic-ui-react'

interface IProps {
  author: string
  description: string
}

const ResponseHeader = (props: IProps) => {
  const { author = '', description = '' } = props

  return (
    <Grid columns={3} divided>
      <GridRow>
        <GridColumn>
          <Image src='' />
        </GridColumn>
        <GridColumn>
          <GridRow>
            {author}
            {description}
          </GridRow>
        </GridColumn>
      </GridRow>
    </Grid>
  )
}

export default ResponseHeader
