import { useState } from "react"

export default function App() {

  const [author, setAuthor] = useState("")
  const [content, setContent] = useState("")
  const [comments, setComments] = useState([])

  const handleSubmit = (ev) => {
    ev.preventDefault()

    const newComment = {
      id: Math.floor(Math.random() * 1000000),
      author: author,
      content:content,
      createdAt: new Date()
    }

    setComments((states) => [newComment, ...states])
    setAuthor("")
    setContent("")
  }

  return (
    <div id="app">
      <h2>Seção de Comentarios</h2>
      <form onSubmit={handleSubmit}> 
        <label htmlFor="author">Email</label>
        <input
          type="email"
          id="author"
          required
          value={author}
          onChange={(ev) => setAuthor(ev.target.value)}
        />
        <label htmlFor="content">Comentario</label>
        <textarea
          name="content"
          id="content"
          cols="30"
          row="6"
          required
          value={content}
          onChange={(ev) => setContent(ev.target.value)}
        ></textarea>
        <button type="submit">Enviar Comentario</button>
      </form>
      <hr />
      <section id="comments">
        {comments.length > 0 
        ? (
          comments.map((comment)=>(
            <div key={comment.id}>
                <h3>{comment.author}</h3>
                <span>Em {comment.createdAt.toLocaleString()}</span>
                <p>{comment.content}</p>
            </div>
          ))
        ): (
            <p>Seja o Primeiro a Comentar!</p>
        )
        }
      </section>
    </div>
  )
}