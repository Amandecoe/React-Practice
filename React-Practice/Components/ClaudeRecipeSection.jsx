import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
export default function ClaudeRecipe(props){
return (
    <section>
        ReactDom.render(<ReactMarkdown>{props.recipe}</ReactMarkdown>)
    </section>
)
}
