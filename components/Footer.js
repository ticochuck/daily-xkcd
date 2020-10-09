import Link from 'next/link'

export default function Footer(props) {
    
    const currentNum = props.comicNum;
    const nums = [];

    for (let i = currentNum; i > currentNum - 10; i--) {
        nums.push(i)
    }
    
    return (
        <footer>
            <h2>Previous {nums.length}</h2>
            {nums.map(num => (
                <span key={num}>
                    <Link href="/num/[id].js" as={`/num/${num}`}>
                        <a>#{num}</a>
                    </Link>
                </span>
            ))}
            <style jsx>{`
                span {
                    margin-right: 5px;
                }
            `}
            </style>
        </footer>
    )
}