import React from 'react'

export default class Home extends React.Component {
	render() {
		return (
			<>
			<div className="parallax">
	          <section>
	            <div className="image" data-type="background" data-speed="2"></div>
	              <div className="stuff" data-type="content">
	      	    	<h1>Welcome</h1>
	      	    	<h2>This is a demo website</h2>
	      	    </div>
	          </section>
	        </div>

	        <section className="text-center">
	          <div className="jumbotron text-center m-0">

	            <h2 className="card-title h2">Developer</h2>
	            <p className="blue-text my-4 font-weight-bold">ini tentang menjadi seorang developer</p>

	            <div className="row d-flex justify-content-center animated fadeInRightBig">

	              <div className="col-xl-7 pb-2">

	                <p className="card-text">Teknologi khususnya Teknologi Informasi itu luas, ada Programmer, Networking, IT Support, DBA (Data Base Administrator), dan masih banyak lagi. Beberapa dari kategori itu pun masih dipecah lagi, misalkan programmer ada web programmer, desktop programmer, android, ios, dll. Ada pula yang dipecah berdasarkan spesialisai penguasannya, misalkan programmer PHP, programmer JAVA, Microtik, Oracle Developer, Wordpress Developer dll.</p>

	              </div>

	            </div>

	            <hr className="my-4" />

	            <div className="pt-2 animated fadeInLeftBig">
	              <p>Untuk menjadi developer setidaknya harus menguasai 1 atau lebih bahasa pemrograman, dan mengetahui "tools" ataupun teknologi yang lain yang dapatb membantu pekerjaannya. Semakin banyak yang dikuasai dan semakin banyak pengetahuan maka semakin baik kualifikasi sebagai developer. Namun tetap harus punya 1 yang benar-benar dikuasai. Tetaplah rendah diri dan teruslah belajar untuk berkembang seperti moto "Arch Linux". Simple and Stupid</p>
	            </div>
	          </div>
	        </section>

	        <div className="parallax">
	          <section>
	            <div className="image" data-type="background" data-speed="7"></div>
	            <div className="stuff" data-type="content">
		    	      <h2>Arch Linux</h2>
		    	      <p>"Simple And Stupid"</p>
		            </div>
	          </section>
	        </div>
	        </>
		)
	}
}