import React from 'react'
import PostAuthor from '../Components/PostAuthor'
import img1 from '../images/img-4.png'
import { Link } from 'react-router-dom'

export default function PostDetail() {
  return (
    <>
      <section className="post-detail">
        <div className="container post-detail-container">
            <div className="post-detail-header">
              <PostAuthor  />
              <div className="post-detail-buttons">
                <Link to={`posts/:id/edit`} className="btn-sm btn-primary">Edit</Link>
                <Link to={`posts/:id/delete`} className="btn-sm btn-danger">Delete</Link>
              </div>
            </div>
            <h1>This is the post title</h1>
            <div className="post-detail-img">
              <img src={img1} alt="" />
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi eius quae iure dolor odio, molestias repellat nihil aut consequuntur, tenetur nisi, natus ipsum aperiam provident consectetur voluptas assumenda et praesentium quidem neque odit 
              
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, possimus amet nobis nemo deserunt impedit in velit, recusandae illum asperiores veritatis hic? Nobis incidunt atque sequi veniam unde minima libero qui quo, officiis labore temporibus sint accusantium recusandae expedita enim reprehenderit voluptatem voluptate soluta hic maxime? Enim aliquid assumenda non dolorum rem odio quae eum?
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione suscipit ipsa minus doloribus, vero, hic saepe sunt dolore laudantium voluptatem labore corporis id illo quaerat earum ad necessitatibus praesentium ea et numquam! At ut ipsa natus ex dolor mollitia, tenetur nesciunt, eius deleniti vel commodi nostrum vitae excepturi numquam assumenda et sit error explicabo sapiente quaerat? Repudiandae sint vitae ipsa sit doloribus beatae, qui non. At culpa voluptas mollitia quae? Nobis modi tempora optio repudiandae porro officiis beatae eos dignissimos id tempore, eum ad deleniti vero inventore delectus possimus quasi labore. Repudiandae doloribus reprehenderit tempora quae ex doloremque quas dolorem?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, atque officiis voluptatibus aspernatur repellendus, esse totam voluptatum dignissimos nobis reiciendis fugit, molestias eveniet perferendis in? Saepe pariatur labore dolor quisquam deleniti adipisci aut totam aliquid, soluta et iure odio ducimus porro voluptas minus? Id saepe quisquam mollitia magni debitis vitae eum est possimus modi corrupti sapiente ducimus eius consequuntur doloremque recusandae, accusantium facilis natus nobis consectetur nulla soluta rerum. Sapiente nam nemo voluptatum. Omnis repudiandae magni aliquam ex velit esse qui harum tempore culpa ullam. Cupiditate voluptatum veniam atque saepe, molestiae nihil. Quisquam harum accusantium commodi neque ipsum nesciunt mollitia fugit, eaque temporibus corrupti asperiores? Amet, cumque! Neque nam est, libero nisi similique voluptatibus harum, quibusdam mollitia aut laboriosam ea sequi voluptatem autem, dolore veniam ullam? Assumenda qui adipisci et error voluptates repudiandae rerum cumque ratione perspiciatis, magni iste quaerat voluptatum! Possimus voluptas aut incidunt! Accusantium dignissimos velit sint ipsum enim ea quasi modi ab eum aliquam, id nesciunt reiciendis eos voluptates vitae ipsam, quibusdam sunt quam, quaerat autem vel quos! Laudantium, tempore dolorum! Cupiditate eveniet praesentium, accusamus neque deleniti et perferendis rem id officiis laudantium repellat vitae, fugit laboriosam quasi vero consequatur omnis quibusdam nobis consectetur harum ipsam voluptatum.</p>
        </div>
      </section>
    </>
  )
}
