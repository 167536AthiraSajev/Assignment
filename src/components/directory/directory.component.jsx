import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'

//class component as we need to store the state value
class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections : [
                {
                  title: 'Han and Hindu Nationalism Come Face to Face',
                  imageUrl:'https://www.fairobserver.com/wp-content/uploads/2020/07/China-India-border-2.jpg', 
                  id: 1,             
                },
                {
                  title: 'Kerala : Festival puts Idukki back on tourist map',
                  imageUrl:'https://www.onlinertiapplication.com/wp-content/uploads/2019/08/File-RTI-in-Kerala.jpg',
                  id: 2,
                
                },
                {
                  title: 'Mukesh Ambani bomb scare mystery deepens, owner of SUV laden with explosives found dead',
                  imageUrl: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202103/Scorpio_Antilla_1200x768.jpeg?V3sGHABk.xU5_JLsNe2S0XWffANMFkZZ&size=1200:675',
                  id: 3,
                 
                },
                
              ]
        }
    }

    render() {
        return(
            <div className='directory-menu'>
                {
                  this.state.sections.map(({title,id,imageUrl}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} id={id}/>        
                  ))
                }
            </div>
        )
    }
}

export default Directory;