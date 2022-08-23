import Card from '../../Components/Cards/component'
import Button from '../../Components/Button/component'
import useListing from './../../useListing'
import styles from './index.module.css'

// This component will have a 'Add block' button and a card listing.
// useListing() hook is holding all the logic for this component.
function Home () {
    const { cardList, onClick, disable } = useListing()

    return (
      <>
      <Button buttonTitle='Add Block' disable={disable} onClick={onClick} />
      <div className={styles['grid-container']}>
        {cardList?.map((item) => <Card item={item} key={item.Uid} />)}
      </div>
      </> 
    )
  }

export default Home;
