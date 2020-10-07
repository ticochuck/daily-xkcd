import Header from '../../components/Header'

export default function ComicDetail(props) {
    return(
        <>
            <Header />
            <h1>{props.comic.title}</h1>
            <img src={props.comic.img} alt={props.comic.alt}></img>
        </>
    )
}

export async function getServerSideProps(context) {
    const num = context.query.id
    const respose = await fetch(`http://xkcd.com/${num}/info.0.json`);
    const comic = await respose.json();
    return {
        props: {
            comic
        }
    }
}