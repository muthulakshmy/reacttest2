
import React, { useState } from 'react';

function Library() {
  const [books, setBooks] = useState([])
  const [Count, setCount] = useState(0)
  const [bookTitle, setBookTitle] = useState(' ')
  const [author, setAuthor] = useState(' ')

  const Add = (name, author) => {
    const newBook = { name, author, read: false }
    setBooks([...books, newBook])
  };

//  const myDiv={
//   display:"flex",
//   flexDirection:"column",

//  }
  const Read = (id) => {
    const readedBooks = books.map((book, i) => {
      if (i === id) {
        const readBook = { ...book, read: true ,disabled: true}
        if (readBook.read) {
          setCount(Count + 1)
        }
       
        return readBook
      }
      return book
    })
    setBooks(readedBooks)
  }
  
  const Delete = (id) => {
    const book = books.filter((value,id1) => id1 !== id)
    console.log(book)
    setBooks(book)
  }

  return (
    <body>
    <div >
      <h1>Library</h1>
     
      <div className='myLibrary'>
        <label>
          Book Title : <br/>
        <input placeholder="Book Title" value={bookTitle} onChange={(e) => setBookTitle(e.target.value)} />
        </label>
        <label>
        Book Author : <br/>
        <input placeholder="Book Author" value={author} onChange={(e) => setAuthor(e.target.value)}/><br/>
        <button onClick={() => Add(bookTitle, author)}>Add Book</button>
        </label>

      </div>
      <div>
      <p>Books finished : {Count}</p>
      </div>
      <div>
        {books.map((book, id) => (
          <div >
            <p style={{color:book.read ? 'green' : 'red'}} >
             Title :  {book.name} <br/> Author : {book.author}
            </p>
            <button onClick={() => Read(id)} disabled={book.disabled}>
              {book.read ? 'Book Finished' : 'Read' }
            </button>
            <button className ="delete" onClick={() => Delete(id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
    </body>
  );
}

export default Library

