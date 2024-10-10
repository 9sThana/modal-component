<script>

export default {

}

</script>


<template>

  <div class="container">
    <button @click="openModal('modalS')">Open modal S</button>
    <button @click="openModal('modal')">Open modal default</button>
    <button @click="openModal('modalL')">Open modal L</button>
    <button @click="openModal('modalXL')">Open modal XL</button>
    <button @click="openModal('modalfull')">Open modal fullscreen</button>

  </div>


  <Modal v-if="activeModal == 'modalS'" :size="'S'" @close="activeModal = null" :showHeader="true">

    <template v-slot:header>
      <h2>This is S modal!</h2>
    </template>

    <main>
      <p>Click outside the modal content or on the [x] button to close it.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque ex, tempora quos dolorum voluptatum
        quis
        sunt corporis ducimus amet asperiores aspernatur ipsa omnis suscipit repellendus vitae sequi, consequatur
        voluptate deserunt! Explicabo, placeat repellat! Quis iure, ipsum dolorum ut voluptate deserunt aut officia
        ipsam,
        illo consectetur mollitia eius cum saepe porro laboriosam perferendis ratione? Labore placeat distinctio
        doloribus
        consectetur commodi itaque, sint rem libero, tempora, quod natus repellendus sequi cupiditate. Pariatur debitis
        a
        impedit omnis modi fuga accusamus similique aperiam ad, dolorum beatae, laboriosam inventore neque? Dolorem
        cupiditate nemo eius illum possimus voluptatibus veniam cum hic omnis incidunt ut quam corporis provident nobis
        id
        quisquam, harum neque. Eveniet porro alias vel, repellendus consequuntur aliquid earum accusantium assumenda
        quam
        incidunt esse aliquam. Itaque porro aliquam tempora dolor ex dolores quasi rerum odio eveniet quae, iste
        cupiditate ipsum quo reprehenderit similique minima hic recusandae sed sunt officiis optio. Ipsum, officia
        soluta
        omnis totam accusamus laboriosam debitis. Reiciendis nisi aspernatur vel delectus in? Necessitatibus sunt
        numquam
        enim aut tenetur illo, magni at molestiae consequatur, aliquid, perspiciatis adipisci voluptatibus provident
        odio
        optio omnis cumque ullam consequuntur aperiam laudantium? Sapiente dolorum corrupti repellat aut quae quasi
        voluptate illum illo, animi incidunt, fugiat numquam. Natus quam inventore assumenda ea totam soluta asperiores
        alias odio, quod in iusto facilis porro consequuntur quibusdam sit recusandae unde nostrum repellat earum! Unde
        dignissimos facere optio ducimus. Aut adipisci quaerat labore voluptatem maiores cum esse vel perferendis animi
        aperiam, et dolorem eligendi natus maxime error quo commodi iure sint amet repudiandae quisquam unde expedita!
        Eaque nulla cupiditate inventore, facere debitis quaerat ratione sit consectetur magni, neque totam doloremque
        architecto, natus cum ducimus ipsam fugit. Possimus accusamus exercitationem, voluptatum a officia repellat
        atque
        aut earum id enim ad reprehenderit, laborum fugit laudantium veritatis doloremque tempora vitae asperiores
        totam,
        non ut! Blanditiis deleniti aspernatur itaque nobis nostrum eveniet sunt autem necessitatibus saepe, quam vero
        repellat! Sunt quidem iure repellendus quasi maxime delectus. Neque repudiandae consequuntur cupiditate alias
        provident accusantium porro est officiis sed, quos atque commodi ea aperiam, autem repellendus. Soluta vitae
        officia consequuntur accusamus repudiandae sequi voluptatem vel! Ullam magni deserunt aut, nesciunt laborum
        velit
        numquam. Libero at facilis ratione corporis? Quibusdam ipsum, recusandae quas natus ipsa mollitia omnis iure
        libero? Culpa minus, voluptate aspernatur sit libero consectetur! Eveniet dolor quisquam delectus minima
        corporis
        quos impedit autem cum vel deleniti expedita ullam quas inventore sit unde architecto pariatur odit rerum at a,
        dolorum perspiciatis reprehenderit esse omnis. Totam quod aperiam modi molestias, aspernatur esse alias libero,
        vel nobis a ab porro odio ipsa veniam maxime assumenda? Fuga laborum earum sapiente maiores minus fugit omnis
        saepe, eius molestiae delectus ducimus quae inventore optio ipsa unde facilis! Quas tempora corrupti nisi
        provident tenetur, porro, molestias pariatur quidem doloremque laborum maxime nihil natus! Tempora omnis ipsum
        corporis dolor laudantium obcaecati repellendus. In, alias dolor sapiente id blanditiis sint tempora qui
        repudiandae libero, eos at maiores vero esse! Eligendi in architecto similique quibusdam dolorem, voluptatibus
        obcaecati repudiandae corporis deserunt delectus! Commodi odio explicabo ab quas cupiditate quia modi similique
        iusto dolores perferendis. Enim error magni blanditiis at vel labore nulla hic iusto doloremque a cumque in
        officiis, quas autem odio expedita repellendus nam doloribus pariatur ea possimus? Placeat ullam ipsam eligendi?
        Obcaecati excepturi culpa voluptatem doloribus! Atque, ipsam quo necessitatibus dignissimos tenetur doloremque
        id
        ea quas, illum, similique eligendi. Nemo debitis facilis earum quaerat ducimus cum illum vel consequatur, facere
        expedita laborum placeat dolorem? Repudiandae iure ipsa, voluptatem veniam quo officia beatae ab laborum
        consectetur accusamus eum dignissimos, recusandae quas doloremque odio corrupti minima pariatur! Ipsam nisi
        eveniet architecto, assumenda odit odio soluta deserunt dolores excepturi repellendus quidem maiores omnis in
        consectetur ab saepe, quaerat, dolor possimus? Perspiciatis sequi, vero culpa molestiae nobis pariatur odit
        quidem
        ipsam quae earum praesentium maiores enim recusandae fugit illum odio eum, iste, voluptas magni. Minus deserunt
        voluptatem porro dicta dolor saepe commodi. Quod vel omnis optio maxime, neque dicta quis eos inventore, sequi
        nisi deserunt alias asperiores ipsa quae vero? Sit in facilis veritatis eveniet autem accusantium exercitationem
        dicta corrupti iure, quibusdam officiis vero voluptatibus adipisci non sequi vel id numquam expedita neque sint
        incidunt repellendus. Ut impedit, error quibusdam vero placeat asperiores unde optio libero! Atque, at! Dicta,
        enim, porro itaque quisquam similique expedita hic debitis facilis obcaecati blanditiis sed reprehenderit
        adipisci
        ad ipsum. Veritatis, accusamus dolorem sed molestias sint nam vitae non blanditiis officia delectus aut a magnam
        consequatur quaerat dolor. Totam aspernatur obcaecati sunt accusantium officia unde mollitia placeat. Aperiam
        accusantium voluptas, eius voluptates ratione ab sunt assumenda dicta nostrum, autem inventore voluptate quos
        minima asperiores doloremque esse tempore voluptatibus soluta dolore nam corrupti facilis ad? Facilis et a
        accusamus quasi nobis quod soluta necessitatibus, nemo sapiente voluptatibus qui beatae modi unde non amet harum
        dolorem nostrum nesciunt porro? Optio, sequi. Similique magni at atque itaque sunt. Amet odit enim saepe eos
        earum
        ipsam eius non sed nisi neque sapiente minima voluptas velit cumque, consequuntur aperiam aliquid tempore sunt
        fugiat ipsum at! Ipsum expedita porro hic commodi excepturi esse impedit totam corporis vel iusto nam natus sunt
        numquam dicta nisi sed accusantium suscipit dolore necessitatibus, tenetur, debitis, libero animi? Ad dolorem
        corrupti omnis voluptates qui explicabo unde sunt accusamus accusantium eum. Dolorum aliquam velit voluptatum!
        Minus nihil magni, itaque, nulla molestias tenetur aliquid impedit quasi quibusdam nam, voluptas fugit
        laudantium
        ipsa natus? Optio soluta eius alias aperiam odit architecto, id sit nulla nostrum, tenetur, laboriosam pariatur
        non laudantium esse ducimus ad. Natus nulla expedita dolorem beatae ipsam fuga quisquam iste numquam molestias
        iure recusandae praesentium voluptatibus temporibus deserunt dolor eligendi quas corporis cupiditate similique
        amet, est illum non. Illum voluptate perferendis magni repellendus voluptas corrupti blanditiis pariatur
        obcaecati
        amet officia tempora, modi sed et deleniti numquam cum optio quae quia? Distinctio, iure consequuntur. Quisquam
        eos iusto ipsa, voluptatibus illo labore, commodi quaerat, corrupti et dolore recusandae architecto enim
        mollitia!
        Fugit animi, expedita iusto perferendis praesentium assumenda dignissimos officiis repellat, incidunt corrupti
        totam nesciunt unde in repellendus et hic sunt minima dolores corporis, consequuntur voluptate? Inventore, quod
        laudantium!\</p>
    </main>


  </Modal>

  <Modal v-if="activeModal == 'modal'" @close="activeModal = null" :showHeader="true">

    <template v-slot:header>
      <h2>This is default modal!</h2>
    </template>

    <main>
      <p>Click outside the modal content or on the [x] button to close it.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque ex, tempora quos dolorum voluptatum
        quis
        sunt corporis ducimus amet asperiores aspernatur ipsa omnis suscipit repellendus vitae sequi, consequatur
        voluptate deserunt! Explicabo, placeat repellat! Quis iure, ipsum dolorum ut voluptate deserunt aut officia
        ipsam,
        illo consectetur mollitia eius cum saepe porro laboriosam perferendis ratione? Labore placeat distinctio
        doloribus
        consectetur commodi itaque, sint rem libero, tempora, quod natus repellendus sequi cupiditate. Pariatur debitis
        a
        impedit omnis modi fuga accusamus similique aperiam ad, dolorum beatae, laboriosam inventore neque? Dolorem
        cupiditate nemo eius illum possimus voluptatibus veniam cum hic omnis incidunt ut quam corporis provident nobis
        id
        quisquam, harum neque. Eveniet porro alias vel, repellendus consequuntur aliquid earum accusantium assumenda
        quam
        incidunt esse aliquam. Itaque porro aliquam tempora dolor ex dolores quasi rerum odio eveniet quae, iste
        cupiditate ipsum quo reprehenderit similique minima hic recusandae sed sunt officiis optio. Ipsum, officia
        soluta
        omnis totam accusamus laboriosam debitis. Reiciendis nisi aspernatur vel delectus in? Necessitatibus sunt
        numquam
        enim aut tenetur illo, magni at molestiae consequatur, aliquid, perspiciatis adipisci voluptatibus provident
        odio
        optio omnis cumque ullam consequuntur aperiam laudantium? Sapiente dolorum corrupti repellat aut quae quasi
        voluptate illum illo, animi incidunt, fugiat numquam. Natus quam inventore assumenda ea totam soluta asperiores
        alias odio, quod in iusto facilis porro consequuntur quibusdam sit recusandae unde nostrum repellat earum! Unde
        dignissimos facere optio ducimus. Aut adipisci quaerat labore voluptatem maiores cum esse vel perferendis animi
        aperiam, et dolorem eligendi natus maxime error quo commodi iure sint amet repudiandae quisquam unde expedita!
        Eaque nulla cupiditate inventore, facere debitis quaerat ratione sit consectetur magni, neque totam doloremque
        architecto, natus cum ducimus ipsam fugit. Possimus accusamus exercitationem, voluptatum a officia repellat
        atque
        aut earum id enim ad reprehenderit, laborum fugit laudantium veritatis doloremque tempora vitae asperiores
        totam,
        non ut! Blanditiis deleniti aspernatur itaque nobis nostrum eveniet sunt autem necessitatibus saepe, quam vero
        repellat! Sunt quidem iure repellendus quasi maxime delectus. Neque repudiandae consequuntur cupiditate alias
        provident accusantium porro est officiis sed, quos atque commodi ea aperiam, autem repellendus. Soluta vitae
        officia consequuntur accusamus repudiandae sequi voluptatem vel! Ullam magni deserunt aut, nesciunt laborum
        velit
        numquam. Libero at facilis ratione corporis? Quibusdam ipsum, recusandae quas natus ipsa mollitia omnis iure
        libero? Culpa minus, voluptate aspernatur sit libero consectetur! Eveniet dolor quisquam delectus minima
        corporis
        quos impedit autem cum vel deleniti expedita ullam quas inventore sit unde architecto pariatur odit rerum at a,
        dolorum perspiciatis reprehenderit esse omnis. Totam quod aperiam modi molestias, aspernatur esse alias libero,
        vel nobis a ab porro odio ipsa veniam maxime assumenda? Fuga laborum earum sapiente maiores minus fugit omnis
        saepe, eius molestiae delectus ducimus quae inventore optio ipsa unde facilis! Quas tempora corrupti nisi
        provident tenetur, porro, molestias pariatur quidem doloremque laborum maxime nihil natus! Tempora omnis ipsum
        corporis dolor laudantium obcaecati repellendus. In, alias dolor sapiente id blanditiis sint tempora qui
        repudiandae libero, eos at maiores vero esse! Eligendi in architecto similique quibusdam dolorem, voluptatibus
        obcaecati repudiandae corporis deserunt delectus! Commodi odio explicabo ab quas cupiditate quia modi similique
        iusto dolores perferendis. Enim error magni blanditiis at vel labore nulla hic iusto doloremque a cumque in
        officiis, quas autem odio expedita repellendus nam doloribus pariatur ea possimus? Placeat ullam ipsam eligendi?
        Obcaecati excepturi culpa voluptatem doloribus! Atque, ipsam quo necessitatibus dignissimos tenetur doloremque
        id
        ea quas, illum, similique eligendi. Nemo debitis facilis earum quaerat ducimus cum illum vel consequatur, facere
        expedita laborum placeat dolorem? Repudiandae iure ipsa, voluptatem veniam quo officia beatae ab laborum
        consectetur accusamus eum dignissimos, recusandae quas doloremque odio corrupti minima pariatur! Ipsam nisi
        eveniet architecto, assumenda odit odio soluta deserunt dolores excepturi repellendus quidem maiores omnis in
        consectetur ab saepe, quaerat, dolor possimus? Perspiciatis sequi, vero culpa molestiae nobis pariatur odit
        quidem
        ipsam quae earum praesentium maiores enim recusandae fugit illum odio eum, iste, voluptas magni. Minus deserunt
        voluptatem porro dicta dolor saepe commodi. Quod vel omnis optio maxime, neque dicta quis eos inventore, sequi
        nisi deserunt alias asperiores ipsa quae vero? Sit in facilis veritatis eveniet autem accusantium exercitationem
        dicta corrupti iure, quibusdam officiis vero voluptatibus adipisci non sequi vel id numquam expedita neque sint
        incidunt repellendus. Ut impedit, error quibusdam vero placeat asperiores unde optio libero! Atque, at! Dicta,
        enim, porro itaque quisquam similique expedita hic debitis facilis obcaecati blanditiis sed reprehenderit
        adipisci
        ad ipsum. Veritatis, accusamus dolorem sed molestias sint nam vitae non blanditiis officia delectus aut a magnam
        consequatur quaerat dolor. Totam aspernatur obcaecati sunt accusantium officia unde mollitia placeat. Aperiam
        accusantium voluptas, eius voluptates ratione ab sunt assumenda dicta nostrum, autem inventore voluptate quos
        minima asperiores doloremque esse tempore voluptatibus soluta dolore nam corrupti facilis ad? Facilis et a
        accusamus quasi nobis quod soluta necessitatibus, nemo sapiente voluptatibus qui beatae modi unde non amet harum
        dolorem nostrum nesciunt porro? Optio, sequi. Similique magni at atque itaque sunt. Amet odit enim saepe eos
        earum
        ipsam eius non sed nisi neque sapiente minima voluptas velit cumque, consequuntur aperiam aliquid tempore sunt
        fugiat ipsum at! Ipsum expedita porro hic commodi excepturi esse impedit totam corporis vel iusto nam natus sunt
        numquam dicta nisi sed accusantium suscipit dolore necessitatibus, tenetur, debitis, libero animi? Ad dolorem
        corrupti omnis voluptates qui explicabo unde sunt accusamus accusantium eum. Dolorum aliquam velit voluptatum!
        Minus nihil magni, itaque, nulla molestias tenetur aliquid impedit quasi quibusdam nam, voluptas fugit
        laudantium
        ipsa natus? Optio soluta eius alias aperiam odit architecto, id sit nulla nostrum, tenetur, laboriosam pariatur
        non laudantium esse ducimus ad. Natus nulla expedita dolorem beatae ipsam fuga quisquam iste numquam molestias
        iure recusandae praesentium voluptatibus temporibus deserunt dolor eligendi quas corporis cupiditate similique
        amet, est illum non. Illum voluptate perferendis magni repellendus voluptas corrupti blanditiis pariatur
        obcaecati
        amet officia tempora, modi sed et deleniti numquam cum optio quae quia? Distinctio, iure consequuntur. Quisquam
        eos iusto ipsa, voluptatibus illo labore, commodi quaerat, corrupti et dolore recusandae architecto enim
        mollitia!
        Fugit animi, expedita iusto perferendis praesentium assumenda dignissimos officiis repellat, incidunt corrupti
        totam nesciunt unde in repellendus et hic sunt minima dolores corporis, consequuntur voluptate? Inventore, quod
        laudantium!\</p>

    </main>


  </Modal>

  <Modal v-if="activeModal == 'modalL'" :size="'L'" @close="activeModal = null" :showHeader="true">

    <template v-slot:header>
      <h2>This is L modal!</h2>
    </template>

    <main>
      <p>Click outside the modal content or on the [x] button to close it.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque ex, tempora quos dolorum voluptatum
        quis
        sunt corporis ducimus amet asperiores aspernatur ipsa omnis suscipit repellendus vitae sequi, consequatur
        voluptate deserunt! Explicabo, placeat repellat! Quis iure, ipsum dolorum ut voluptate deserunt aut officia
        ipsam,
        illo consectetur mollitia eius cum saepe porro laboriosam perferendis ratione? Labore placeat distinctio
        doloribus
        consectetur commodi itaque, sint rem libero, tempora, quod natus repellendus sequi cupiditate. Pariatur debitis
        a
        impedit omnis modi fuga accusamus similique aperiam ad, dolorum beatae, laboriosam inventore neque? Dolorem
        cupiditate nemo eius illum possimus voluptatibus veniam cum hic omnis incidunt ut quam corporis provident nobis
        id
        quisquam, harum neque. Eveniet porro alias vel, repellendus consequuntur aliquid earum accusantium assumenda
        quam
        incidunt esse aliquam. Itaque porro aliquam tempora dolor ex dolores quasi rerum odio eveniet quae, iste
        cupiditate ipsum quo reprehenderit similique minima hic recusandae sed sunt officiis optio. Ipsum, officia
        soluta
        omnis totam accusamus laboriosam debitis. Reiciendis nisi aspernatur vel delectus in? Necessitatibus sunt
        numquam
        enim aut tenetur illo, magni at molestiae consequatur, aliquid, perspiciatis adipisci voluptatibus provident
        odio
        optio omnis cumque ullam consequuntur aperiam laudantium? Sapiente dolorum corrupti repellat aut quae quasi
        voluptate illum illo, animi incidunt, fugiat numquam. Natus quam inventore assumenda ea totam soluta asperiores
        alias odio, quod in iusto facilis porro consequuntur quibusdam sit recusandae unde nostrum repellat earum! Unde
        dignissimos facere optio ducimus. Aut adipisci quaerat labore voluptatem maiores cum esse vel perferendis animi
        aperiam, et dolorem eligendi natus maxime error quo commodi iure sint amet repudiandae quisquam unde expedita!
        Eaque nulla cupiditate inventore, facere debitis quaerat ratione sit consectetur magni, neque totam doloremque
        architecto, natus cum ducimus ipsam fugit. Possimus accusamus exercitationem, voluptatum a officia repellat
        atque
        aut earum id enim ad reprehenderit, laborum fugit laudantium veritatis doloremque tempora vitae asperiores
        totam,
        non ut! Blanditiis deleniti aspernatur itaque nobis nostrum eveniet sunt autem necessitatibus saepe, quam vero
        repellat! Sunt quidem iure repellendus quasi maxime delectus. Neque repudiandae consequuntur cupiditate alias
        provident accusantium porro est officiis sed, quos atque commodi ea aperiam, autem repellendus. Soluta vitae
        officia consequuntur accusamus repudiandae sequi voluptatem vel! Ullam magni deserunt aut, nesciunt laborum
        velit
        numquam. Libero at facilis ratione corporis? Quibusdam ipsum, recusandae quas natus ipsa mollitia omnis iure
        libero? Culpa minus, voluptate aspernatur sit libero consectetur! Eveniet dolor quisquam delectus minima
        corporis
        quos impedit autem cum vel deleniti expedita ullam quas inventore sit unde architecto pariatur odit rerum at a,
        dolorum perspiciatis reprehenderit esse omnis. Totam quod aperiam modi molestias, aspernatur esse alias libero,
        vel nobis a ab porro odio ipsa veniam maxime assumenda? Fuga laborum earum sapiente maiores minus fugit omnis
        saepe, eius molestiae delectus ducimus quae inventore optio ipsa unde facilis! Quas tempora corrupti nisi
        provident tenetur, porro, molestias pariatur quidem doloremque laborum maxime nihil natus! Tempora omnis ipsum
        corporis dolor laudantium obcaecati repellendus. In, alias dolor sapiente id blanditiis sint tempora qui
        repudiandae libero, eos at maiores vero esse! Eligendi in architecto similique quibusdam dolorem, voluptatibus
        obcaecati repudiandae corporis deserunt delectus! Commodi odio explicabo ab quas cupiditate quia modi similique
        iusto dolores perferendis. Enim error magni blanditiis at vel labore nulla hic iusto doloremque a cumque in
        officiis, quas autem odio expedita repellendus nam doloribus pariatur ea possimus? Placeat ullam ipsam eligendi?
        Obcaecati excepturi culpa voluptatem doloribus! Atque, ipsam quo necessitatibus dignissimos tenetur doloremque
        id
        ea quas, illum, similique eligendi. Nemo debitis facilis earum quaerat ducimus cum illum vel consequatur, facere
        expedita laborum placeat dolorem? Repudiandae iure ipsa, voluptatem veniam quo officia beatae ab laborum
        consectetur accusamus eum dignissimos, recusandae quas doloremque odio corrupti minima pariatur! Ipsam nisi
        eveniet architecto, assumenda odit odio soluta deserunt dolores excepturi repellendus quidem maiores omnis in
        consectetur ab saepe, quaerat, dolor possimus? Perspiciatis sequi, vero culpa molestiae nobis pariatur odit
        quidem
        ipsam quae earum praesentium maiores enim recusandae fugit illum odio eum, iste, voluptas magni. Minus deserunt
        voluptatem porro dicta dolor saepe commodi. Quod vel omnis optio maxime, neque dicta quis eos inventore, sequi
        nisi deserunt alias asperiores ipsa quae vero? Sit in facilis veritatis eveniet autem accusantium exercitationem
        dicta corrupti iure, quibusdam officiis vero voluptatibus adipisci non sequi vel id numquam expedita neque sint
        incidunt repellendus. Ut impedit, error quibusdam vero placeat asperiores unde optio libero! Atque, at! Dicta,
        enim, porro itaque quisquam similique expedita hic debitis facilis obcaecati blanditiis sed reprehenderit
        adipisci
        ad ipsum. Veritatis, accusamus dolorem sed molestias sint nam vitae non blanditiis officia delectus aut a magnam
        consequatur quaerat dolor. Totam aspernatur obcaecati sunt accusantium officia unde mollitia placeat. Aperiam
        accusantium voluptas, eius voluptates ratione ab sunt assumenda dicta nostrum, autem inventore voluptate quos
        minima asperiores doloremque esse tempore voluptatibus soluta dolore nam corrupti facilis ad? Facilis et a
        accusamus quasi nobis quod soluta necessitatibus, nemo sapiente voluptatibus qui beatae modi unde non amet harum
        dolorem nostrum nesciunt porro? Optio, sequi. Similique magni at atque itaque sunt. Amet odit enim saepe eos
        earum
        ipsam eius non sed nisi neque sapiente minima voluptas velit cumque, consequuntur aperiam aliquid tempore sunt
        fugiat ipsum at! Ipsum expedita porro hic commodi excepturi esse impedit totam corporis vel iusto nam natus sunt
        numquam dicta nisi sed accusantium suscipit dolore necessitatibus, tenetur, debitis, libero animi? Ad dolorem
        corrupti omnis voluptates qui explicabo unde sunt accusamus accusantium eum. Dolorum aliquam velit voluptatum!
        Minus nihil magni, itaque, nulla molestias tenetur aliquid impedit quasi quibusdam nam, voluptas fugit
        laudantium
        ipsa natus? Optio soluta eius alias aperiam odit architecto, id sit nulla nostrum, tenetur, laboriosam pariatur
        non laudantium esse ducimus ad. Natus nulla expedita dolorem beatae ipsam fuga quisquam iste numquam molestias
        iure recusandae praesentium voluptatibus temporibus deserunt dolor eligendi quas corporis cupiditate similique
        amet, est illum non. Illum voluptate perferendis magni repellendus voluptas corrupti blanditiis pariatur
        obcaecati
        amet officia tempora, modi sed et deleniti numquam cum optio quae quia? Distinctio, iure consequuntur. Quisquam
        eos iusto ipsa, voluptatibus illo labore, commodi quaerat, corrupti et dolore recusandae architecto enim
        mollitia!
        Fugit animi, expedita iusto perferendis praesentium assumenda dignissimos officiis repellat, incidunt corrupti
        totam nesciunt unde in repellendus et hic sunt minima dolores corporis, consequuntur voluptate? Inventore, quod
        laudantium!\</p>
    </main>


  </Modal>

  <Modal v-if="activeModal == 'modalXL'" :size="'XL'" @close="activeModal = null" :showHeader="true">

    <template v-slot:header>
      <h2>This is XL modal!</h2>
    </template>

    <main>
      <p>Click outside the modal content or on the [x] button to close it.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque ex, tempora quos dolorum voluptatum
        quis
        sunt corporis ducimus amet asperiores aspernatur ipsa omnis suscipit repellendus vitae sequi, consequatur
        voluptate deserunt! Explicabo, placeat repellat! Quis iure, ipsum dolorum ut voluptate deserunt aut officia
        ipsam,
        illo consectetur mollitia eius cum saepe porro laboriosam perferendis ratione? Labore placeat distinctio
        doloribus
        consectetur commodi itaque, sint rem libero, tempora, quod natus repellendus sequi cupiditate. Pariatur debitis
        a
        impedit omnis modi fuga accusamus similique aperiam ad, dolorum beatae, laboriosam inventore neque? Dolorem
        cupiditate nemo eius illum possimus voluptatibus veniam cum hic omnis incidunt ut quam corporis provident nobis
        id
        quisquam, harum neque. Eveniet porro alias vel, repellendus consequuntur aliquid earum accusantium assumenda
        quam
        incidunt esse aliquam. Itaque porro aliquam tempora dolor ex dolores quasi rerum odio eveniet quae, iste
        cupiditate ipsum quo reprehenderit similique minima hic recusandae sed sunt officiis optio. Ipsum, officia
        soluta
        omnis totam accusamus laboriosam debitis. Reiciendis nisi aspernatur vel delectus in? Necessitatibus sunt
        numquam
        enim aut tenetur illo, magni at molestiae consequatur, aliquid, perspiciatis adipisci voluptatibus provident
        odio
        optio omnis cumque ullam consequuntur aperiam laudantium? Sapiente dolorum corrupti repellat aut quae quasi
        voluptate illum illo, animi incidunt, fugiat numquam. Natus quam inventore assumenda ea totam soluta asperiores
        alias odio, quod in iusto facilis porro consequuntur quibusdam sit recusandae unde nostrum repellat earum! Unde
        dignissimos facere optio ducimus. Aut adipisci quaerat labore voluptatem maiores cum esse vel perferendis animi
        aperiam, et dolorem eligendi natus maxime error quo commodi iure sint amet repudiandae quisquam unde expedita!
        Eaque nulla cupiditate inventore, facere debitis quaerat ratione sit consectetur magni, neque totam doloremque
        architecto, natus cum ducimus ipsam fugit. Possimus accusamus exercitationem, voluptatum a officia repellat
        atque
        aut earum id enim ad reprehenderit, laborum fugit laudantium veritatis doloremque tempora vitae asperiores
        totam,
        non ut! Blanditiis deleniti aspernatur itaque nobis nostrum eveniet sunt autem necessitatibus saepe, quam vero
        repellat! Sunt quidem iure repellendus quasi maxime delectus. Neque repudiandae consequuntur cupiditate alias
        provident accusantium porro est officiis sed, quos atque commodi ea aperiam, autem repellendus. Soluta vitae
        officia consequuntur accusamus repudiandae sequi voluptatem vel! Ullam magni deserunt aut, nesciunt laborum
        velit
        numquam. Libero at facilis ratione corporis? Quibusdam ipsum, recusandae quas natus ipsa mollitia omnis iure
        libero? Culpa minus, voluptate aspernatur sit libero consectetur! Eveniet dolor quisquam delectus minima
        corporis
        quos impedit autem cum vel deleniti expedita ullam quas inventore sit unde architecto pariatur odit rerum at a,
        dolorum perspiciatis reprehenderit esse omnis. Totam quod aperiam modi molestias, aspernatur esse alias libero,
        vel nobis a ab porro odio ipsa veniam maxime assumenda? Fuga laborum earum sapiente maiores minus fugit omnis
        saepe, eius molestiae delectus ducimus quae inventore optio ipsa unde facilis! Quas tempora corrupti nisi
        provident tenetur, porro, molestias pariatur quidem doloremque laborum maxime nihil natus! Tempora omnis ipsum
        corporis dolor laudantium obcaecati repellendus. In, alias dolor sapiente id blanditiis sint tempora qui
        repudiandae libero, eos at maiores vero esse! Eligendi in architecto similique quibusdam dolorem, voluptatibus
        obcaecati repudiandae corporis deserunt delectus! Commodi odio explicabo ab quas cupiditate quia modi similique
        iusto dolores perferendis. Enim error magni blanditiis at vel labore nulla hic iusto doloremque a cumque in
        officiis, quas autem odio expedita repellendus nam doloribus pariatur ea possimus? Placeat ullam ipsam eligendi?
        Obcaecati excepturi culpa voluptatem doloribus! Atque, ipsam quo necessitatibus dignissimos tenetur doloremque
        id
        ea quas, illum, similique eligendi. Nemo debitis facilis earum quaerat ducimus cum illum vel consequatur, facere
        expedita laborum placeat dolorem? Repudiandae iure ipsa, voluptatem veniam quo officia beatae ab laborum
        consectetur accusamus eum dignissimos, recusandae quas doloremque odio corrupti minima pariatur! Ipsam nisi
        eveniet architecto, assumenda odit odio soluta deserunt dolores excepturi repellendus quidem maiores omnis in
        consectetur ab saepe, quaerat, dolor possimus? Perspiciatis sequi, vero culpa molestiae nobis pariatur odit
        quidem
        ipsam quae earum praesentium maiores enim recusandae fugit illum odio eum, iste, voluptas magni. Minus deserunt
        voluptatem porro dicta dolor saepe commodi. Quod vel omnis optio maxime, neque dicta quis eos inventore, sequi
        nisi deserunt alias asperiores ipsa quae vero? Sit in facilis veritatis eveniet autem accusantium exercitationem
        dicta corrupti iure, quibusdam officiis vero voluptatibus adipisci non sequi vel id numquam expedita neque sint
        incidunt repellendus. Ut impedit, error quibusdam vero placeat asperiores unde optio libero! Atque, at! Dicta,
        enim, porro itaque quisquam similique expedita hic debitis facilis obcaecati blanditiis sed reprehenderit
        adipisci
        ad ipsum. Veritatis, accusamus dolorem sed molestias sint nam vitae non blanditiis officia delectus aut a magnam
        consequatur quaerat dolor. Totam aspernatur obcaecati sunt accusantium officia unde mollitia placeat. Aperiam
        accusantium voluptas, eius voluptates ratione ab sunt assumenda dicta nostrum, autem inventore voluptate quos
        minima asperiores doloremque esse tempore voluptatibus soluta dolore nam corrupti facilis ad? Facilis et a
        accusamus quasi nobis quod soluta necessitatibus, nemo sapiente voluptatibus qui beatae modi unde non amet harum
        dolorem nostrum nesciunt porro? Optio, sequi. Similique magni at atque itaque sunt. Amet odit enim saepe eos
        earum
        ipsam eius non sed nisi neque sapiente minima voluptas velit cumque, consequuntur aperiam aliquid tempore sunt
        fugiat ipsum at! Ipsum expedita porro hic commodi excepturi esse impedit totam corporis vel iusto nam natus sunt
        numquam dicta nisi sed accusantium suscipit dolore necessitatibus, tenetur, debitis, libero animi? Ad dolorem
        corrupti omnis voluptates qui explicabo unde sunt accusamus accusantium eum. Dolorum aliquam velit voluptatum!
        Minus nihil magni, itaque, nulla molestias tenetur aliquid impedit quasi quibusdam nam, voluptas fugit
        laudantium
        ipsa natus? Optio soluta eius alias aperiam odit architecto, id sit nulla nostrum, tenetur, laboriosam pariatur
        non laudantium esse ducimus ad. Natus nulla expedita dolorem beatae ipsam fuga quisquam iste numquam molestias
        iure recusandae praesentium voluptatibus temporibus deserunt dolor eligendi quas corporis cupiditate similique
        amet, est illum non. Illum voluptate perferendis magni repellendus voluptas corrupti blanditiis pariatur
        obcaecati
        amet officia tempora, modi sed et deleniti numquam cum optio quae quia? Distinctio, iure consequuntur. Quisquam
        eos iusto ipsa, voluptatibus illo labore, commodi quaerat, corrupti et dolore recusandae architecto enim
        mollitia!
        Fugit animi, expedita iusto perferendis praesentium assumenda dignissimos officiis repellat, incidunt corrupti
        totam nesciunt unde in repellendus et hic sunt minima dolores corporis, consequuntur voluptate? Inventore, quod
        laudantium!\</p>
    </main>


  </Modal>

  <Modal v-if="activeModal == 'modalfull'" :size="'fullscreen'" @close="activeModal = null" :showHeader="true">

    <template v-slot:header>
      <h2>This is fullscreen modal!</h2>
    </template>

    <main>
      <p>Click outside the modal content or on the [x] button to close it.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci atque ex, tempora quos dolorum voluptatum
        quis
        sunt corporis ducimus amet asperiores aspernatur ipsa omnis suscipit repellendus vitae sequi, consequatur
        voluptate deserunt! Explicabo, placeat repellat! Quis iure, ipsum dolorum ut voluptate deserunt aut officia
        ipsam,
        illo consectetur mollitia eius cum saepe porro laboriosam perferendis ratione? Labore placeat distinctio
        doloribus
        consectetur commodi itaque, sint rem libero, tempora, quod natus repellendus sequi cupiditate. Pariatur debitis
        a
        impedit omnis modi fuga accusamus similique aperiam ad, dolorum beatae, laboriosam inventore neque? Dolorem
        cupiditate nemo eius illum possimus voluptatibus veniam cum hic omnis incidunt ut quam corporis provident nobis
        id
        quisquam, harum neque. Eveniet porro alias vel, repellendus consequuntur aliquid earum accusantium assumenda
        quam
        incidunt esse aliquam. Itaque porro aliquam tempora dolor ex dolores quasi rerum odio eveniet quae, iste
        cupiditate ipsum quo reprehenderit similique minima hic recusandae sed sunt officiis optio. Ipsum, officia
        soluta
        omnis totam accusamus laboriosam debitis. Reiciendis nisi aspernatur vel delectus in? Necessitatibus sunt
        numquam
        enim aut tenetur illo, magni at molestiae consequatur, aliquid, perspiciatis adipisci voluptatibus provident
        odio
        optio omnis cumque ullam consequuntur aperiam laudantium? Sapiente dolorum corrupti repellat aut quae quasi
        voluptate illum illo, animi incidunt, fugiat numquam. Natus quam inventore assumenda ea totam soluta asperiores
        alias odio, quod in iusto facilis porro consequuntur quibusdam sit recusandae unde nostrum repellat earum! Unde
        dignissimos facere optio ducimus. Aut adipisci quaerat labore voluptatem maiores cum esse vel perferendis animi
        aperiam, et dolorem eligendi natus maxime error quo commodi iure sint amet repudiandae quisquam unde expedita!
        Eaque nulla cupiditate inventore, facere debitis quaerat ratione sit consectetur magni, neque totam doloremque
        architecto, natus cum ducimus ipsam fugit. Possimus accusamus exercitationem, voluptatum a officia repellat
        atque
        aut earum id enim ad reprehenderit, laborum fugit laudantium veritatis doloremque tempora vitae asperiores
        totam,
        non ut! Blanditiis deleniti aspernatur itaque nobis nostrum eveniet sunt autem necessitatibus saepe, quam vero
        repellat! Sunt quidem iure repellendus quasi maxime delectus. Neque repudiandae consequuntur cupiditate alias
        provident accusantium porro est officiis sed, quos atque commodi ea aperiam, autem repellendus. Soluta vitae
        officia consequuntur accusamus repudiandae sequi voluptatem vel! Ullam magni deserunt aut, nesciunt laborum
        velit
        numquam. Libero at facilis ratione corporis? Quibusdam ipsum, recusandae quas natus ipsa mollitia omnis iure
        libero? Culpa minus, voluptate aspernatur sit libero consectetur! Eveniet dolor quisquam delectus minima
        corporis
        quos impedit autem cum vel deleniti expedita ullam quas inventore sit unde architecto pariatur odit rerum at a,
        dolorum perspiciatis reprehenderit esse omnis. Totam quod aperiam modi molestias, aspernatur esse alias libero,
        vel nobis a ab porro odio ipsa veniam maxime assumenda? Fuga laborum earum sapiente maiores minus fugit omnis
        saepe, eius molestiae delectus ducimus quae inventore optio ipsa unde facilis! Quas tempora corrupti nisi
        provident tenetur, porro, molestias pariatur quidem doloremque laborum maxime nihil natus! Tempora omnis ipsum
        corporis dolor laudantium obcaecati repellendus. In, alias dolor sapiente id blanditiis sint tempora qui
        repudiandae libero, eos at maiores vero esse! Eligendi in architecto similique quibusdam dolorem, voluptatibus
        obcaecati repudiandae corporis deserunt delectus! Commodi odio explicabo ab quas cupiditate quia modi similique
        iusto dolores perferendis. Enim error magni blanditiis at vel labore nulla hic iusto doloremque a cumque in
        officiis, quas autem odio expedita repellendus nam doloribus pariatur ea possimus? Placeat ullam ipsam eligendi?
        Obcaecati excepturi culpa voluptatem doloribus! Atque, ipsam quo necessitatibus dignissimos tenetur doloremque
        id
        ea quas, illum, similique eligendi. Nemo debitis facilis earum quaerat ducimus cum illum vel consequatur, facere
        expedita laborum placeat dolorem? Repudiandae iure ipsa, voluptatem veniam quo officia beatae ab laborum
        consectetur accusamus eum dignissimos, recusandae quas doloremque odio corrupti minima pariatur! Ipsam nisi
        eveniet architecto, assumenda odit odio soluta deserunt dolores excepturi repellendus quidem maiores omnis in
        consectetur ab saepe, quaerat, dolor possimus? Perspiciatis sequi, vero culpa molestiae nobis pariatur odit
        quidem
        ipsam quae earum praesentium maiores enim recusandae fugit illum odio eum, iste, voluptas magni. Minus deserunt
        voluptatem porro dicta dolor saepe commodi. Quod vel omnis optio maxime, neque dicta quis eos inventore, sequi
        nisi deserunt alias asperiores ipsa quae vero? Sit in facilis veritatis eveniet autem accusantium exercitationem
        dicta corrupti iure, quibusdam officiis vero voluptatibus adipisci non sequi vel id numquam expedita neque sint
        incidunt repellendus. Ut impedit, error quibusdam vero placeat asperiores unde optio libero! Atque, at! Dicta,
        enim, porro itaque quisquam similique expedita hic debitis facilis obcaecati blanditiis sed reprehenderit
        adipisci
        ad ipsum. Veritatis, accusamus dolorem sed molestias sint nam vitae non blanditiis officia delectus aut a magnam
        consequatur quaerat dolor. Totam aspernatur obcaecati sunt accusantium officia unde mollitia placeat. Aperiam
        accusantium voluptas, eius voluptates ratione ab sunt assumenda dicta nostrum, autem inventore voluptate quos
        minima asperiores doloremque esse tempore voluptatibus soluta dolore nam corrupti facilis ad? Facilis et a
        accusamus quasi nobis quod soluta necessitatibus, nemo sapiente voluptatibus qui beatae modi unde non amet harum
        dolorem nostrum nesciunt porro? Optio, sequi. Similique magni at atque itaque sunt. Amet odit enim saepe eos
        earum
        ipsam eius non sed nisi neque sapiente minima voluptas velit cumque, consequuntur aperiam aliquid tempore sunt
        fugiat ipsum at! Ipsum expedita porro hic commodi excepturi esse impedit totam corporis vel iusto nam natus sunt
        numquam dicta nisi sed accusantium suscipit dolore necessitatibus, tenetur, debitis, libero animi? Ad dolorem
        corrupti omnis voluptates qui explicabo unde sunt accusamus accusantium eum. Dolorum aliquam velit voluptatum!
        Minus nihil magni, itaque, nulla molestias tenetur aliquid impedit quasi quibusdam nam, voluptas fugit
        laudantium
        ipsa natus? Optio soluta eius alias aperiam odit architecto, id sit nulla nostrum, tenetur, laboriosam pariatur
        non laudantium esse ducimus ad. Natus nulla expedita dolorem beatae ipsam fuga quisquam iste numquam molestias
        iure recusandae praesentium voluptatibus temporibus deserunt dolor eligendi quas corporis cupiditate similique
        amet, est illum non. Illum voluptate perferendis magni repellendus voluptas corrupti blanditiis pariatur
        obcaecati
        amet officia tempora, modi sed et deleniti numquam cum optio quae quia? Distinctio, iure consequuntur. Quisquam
        eos iusto ipsa, voluptatibus illo labore, commodi quaerat, corrupti et dolore recusandae architecto enim
        mollitia!
        Fugit animi, expedita iusto perferendis praesentium assumenda dignissimos officiis repellat, incidunt corrupti
        totam nesciunt unde in repellendus et hic sunt minima dolores corporis, consequuntur voluptate? Inventore, quod
        laudantium!\</p>
    </main>


  </Modal>

</template>
