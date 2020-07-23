import React from 'react'

export default class About extends React.Component {
	render() {
		return (
			<>
			<div className="parallax">
	          <section>
	            <div className="image-about" data-type="background" data-speed="2"></div>
	              <div className="stuff" data-type="content">
	      	    	<h1>Saya adalah seorang programmer</h1>
	      	    	<h2>Terfokus kepada pemrograman web</h2>
	      	    </div>
	          </section>
	        </div>

	        <section className="text-center">
	          <div className="jumbotron text-center m-0">

	            <h2 className="card-title h2">Frontend</h2>

	            <div className="row d-flex justify-content-center animated fadeInRightBig">

	              <div className="col-xl-7 pb-2">

	                <p className="card-text">Saya pernah menjadi Frontend. Menggunakan CSS, Jquery, SASS, sudah biasa kala itu. Namun saya lemah dalam menggunakan aplikasi design grafis seperti potoshop atau colerdraw. Padahal aplikasi itu sebenarnya diwajibkan oleh Web Design bukan frontend. Namun sekarang saya mulai tertarik kembali sejak adanya React. React Js menurut saya menarik dengan teknologi DOM nya. Yang dulu menulis script Javascript didalam HTML, kini serasa menulis HTML didalam Javascript.</p>

	              </div>

	            </div>

	            <hr className="my-4" />

	            <div className="pt-2 animated fadeInLeftBig">
	              <h4 className="card-title h4">Framework Frontend</h4>
	              <p className="card-text">
	              	Dulu framework frontend ya Bootstrap, Bulma, Materialize, Material Design Lite, MDB, dan yang berbasis CSS atau SASS lainnya. Namun sekarang yang disebut framework frontend ya Reactjs, Angular, Vue dan kawan-kawannya yang lebih condong ke javascript. Lah kok sekarang berbasis JS semua, entahlah sepertinya candaan dikalangan JS Developer "Semua akan javascript pada waktunya" akan benar-benar menjadi kenyataan.
	              </p>
	            </div>
	          </div>
	        </section>

	        <div className="parallax">
	          <section>
	            <div className="image-about" data-type="background" data-speed="7"></div>
	            <div className="stuff" data-type="content">
		    	      <h2>Semua Akan Javascript Pada Waktunya</h2>
		    	      <p>Vanilla, JQuery, Node, React, Electron, IoT.js</p>
		            </div>
	          </section>
	        </div>

	        <section className="text-center">
	          <div className="jumbotron text-center m-0">

	            <h2 className="card-title h2">Backend</h2>

	            <div className="row d-flex justify-content-center animated fadeInRightBig">

	              <div className="col-xl-7 pb-2">

	                <p className="card-text">Saya pernah menjadi Backend. Sebenarnya saya bisa dibilang baru menjadi Backend Developer, baru merasakan menggunakan Node belum lama ini. Kala itu tempat perusahaan saya sempat menggunakan Node untuk server side nya sebelum beralih ke Lumen (Framework Micro-nya Laravel). Saya belajar lumayan banyak disana. Mulai dari penanganan web server, pembuatan flow database, query-querynya yang kompleks, pembuatan alur system, handling error and validation to security, penggunaan mem-cached Redis untuk optimalisasi pre load konten. Sekarang ada pula bahasa Go dari google yang saat saya bandingkan dengan PHP itu jauh lebih cepat. Penulisan bahasanyapun Unik.</p>

	              </div>

	            </div>

	            <hr className="my-4" />

	            <div className="pt-2 animated fadeInLeftBig">
	              <h4 className="card-title h4">Framework Backend</h4>
	              <p className="card-text">
	              	Framework Backend ada bermacam-macam. Salah satunya Node yang lagi-lagi dari Javascript. Node terbilang stabil dan dan fleksibel digunakan untuk server side. Selain itu ada Lumen yang digunakan pula di tempat kerja saya yang dulu. Ada Gin yang merupakan frameworknya Golang. Namun beberapa kalangan menyebutkan bahwa menggunakan golang secara native tanpa framework malah lebih bagus untukn performanya.
	              </p>
	            </div>
	          </div>
	        </section>

	        <div className="parallax">
	          <section>
	            <div className="image-about" data-type="background" data-speed="7"></div>
	            <div className="stuff" data-type="content">
		    	      <h2>"What you see is what you get"</h2>
		    	      <p>Gill Bates, WINDOWS</p>
		            </div>
	          </section>
	        </div>

	        <section className="text-center">
	          <div className="jumbotron text-center m-0">

	            <h2 className="card-title h2">Fullstack</h2>
	            	<p className="blue-text my-4 font-weight-bold"></p>

	            <div className="row d-flex justify-content-center animated fadeInRightBig">

	              <div className="col-xl-7 pb-2">

	                <p className="card-text"><i>Menurut saya sebenarnya fullstack itu tidak ada. Itu hanyalah standar paksaan dari industri Indonesia.</i></p>

	              </div>

	            </div>
	          </div>
	        </section>
	        </>
		)
	}
}