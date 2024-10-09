<script>
export default {
  data() {
    return {
      isModalOpen: false
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    }
  }
}
</script>
<template>
  <button @click="openModal">Open modal</button>

  <Modal v-if="isModalOpen" :isOpen="isModalOpen" :showHeader="true" :showFooter="true" @close="isModalOpen = false">

    <template v-slot:modal_title>
      <h2>This is a modal!</h2>
    </template>

    <template v-slot:modal_body>
      <p>Click outside the modal content or on the [x] button to close it.</p>
      <p>
        ------------------------------------------------------------------------------------------------------------------------
      </p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias earum labore consectetur quaerat tenetur totam
        sint reiciendis nisi ab deserunt possimus maxime maiores officiis voluptates repellendus, exercitationem
        aperiam. Optio laboriosam odit facere consequuntur! Fuga aliquam, similique nihil corporis nostrum adipisci ab
        ipsa, delectus nemo accusamus earum provident aperiam illum fugit nobis rem repudiandae totam dolorum sequi!
        Odit quidem hic excepturi eaque corrupti, voluptas atque? Autem a, aperiam error asperiores ullam eius
        voluptatum ad dolore voluptatem! Aut molestiae veniam vero, ipsum consectetur doloribus sit blanditiis cum,
        numquam iste porro! Saepe laboriosam quaerat impedit, quisquam, culpa nesciunt doloremque quae odit facere
        tenetur deleniti consequatur, debitis perferendis nam quidem vel iste non repudiandae nulla similique dolorum!
        Quos perspiciatis non tempore quo nemo animi laboriosam porro eligendi repellat, minima numquam, incidunt natus.
        Quisquam dolorum pariatur velit at error laboriosam facere tenetur assumenda minima voluptates a, voluptatibus
        nulla quae consequuntur architecto iure nisi reiciendis quo deserunt accusantium ducimus sunt? Ducimus aliquid
        ratione doloremque ullam nesciunt sint porro consequuntur quam deserunt et excepturi provident soluta, harum
        sit! Dolorem magnam quaerat voluptate sed. Nulla voluptate molestiae fugit vero nobis consequuntur consectetur
        neque tempore facilis rem dolor esse perspiciatis magni, optio doloremque, illo vitae nemo et? Libero cupiditate
        saepe adipisci, et doloremque nisi veritatis! Animi explicabo officiis mollitia exercitationem alias laboriosam,
        fuga necessitatibus rem iste facilis dolorem numquam, tenetur culpa consequuntur provident quia pariatur libero
        maiores hic vitae saepe aperiam? Facilis, harum. Maxime dolor, sit ipsam culpa dolore qui eveniet, ex
        perferendis commodi, reprehenderit animi molestiae nostrum. Aperiam cum cupiditate eaque distinctio error
        dolorem nihil quas libero eos, consequatur id, molestiae quia possimus maxime ratione quod nesciunt blanditiis a
        labore tempora expedita iste odio minus? Illum autem nam voluptate voluptatem possimus fugit, eaque distinctio
        veritatis pariatur architecto officiis nisi velit explicabo assumenda cumque, numquam odit culpa animi ducimus
        sed quasi! At debitis dolor officia unde aut dolorem necessitatibus nobis sapiente nulla rem? Recusandae earum
        reprehenderit at dolorum quaerat minus adipisci rerum obcaecati aliquam, asperiores, blanditiis molestiae porro
        ipsa nisi, ipsum est nam. Dicta quia enim similique minima, corrupti doloremque in adipisci nihil, molestiae
        dignissimos quasi et nulla dolorum quod minus. Saepe autem ad, deserunt numquam sapiente, voluptate deleniti
        eveniet vitae ipsam atque laudantium maiores incidunt fugiat eum magnam dicta minus ex veniam repudiandae. Culpa
        quaerat vitae sapiente modi qui fugiat non delectus autem assumenda earum quidem unde eum dolorem obcaecati
        omnis quas quam molestiae animi, asperiores sunt impedit explicabo pariatur ex? Totam, accusantium debitis.
        Expedita debitis numquam corrupti rerum fugit quisquam eveniet aliquam nam odio autem maxime aliquid blanditiis
        delectus illum, similique, at voluptas, nobis quam nisi? Repellendus excepturi voluptates praesentium, impedit
        natus atque perferendis ad facere nostrum voluptatibus placeat maiores eum blanditiis dicta earum! Recusandae
        inventore aperiam nisi minima necessitatibus esse fugit, explicabo cum fugiat optio alias, porro numquam.
        Voluptates dicta odit eum sed doloribus omnis corrupti autem officiis nulla, libero sequi maiores ratione at ea
        est optio repudiandae eligendi reiciendis fuga saepe doloremque inventore. Magni perferendis, asperiores sit
        laborum tempore, est praesentium minus labore nobis sunt recusandae unde ipsum consequuntur autem iste.
        Voluptatum enim sed eveniet repellat tempore nostrum dolorem excepturi quis sint nulla voluptatem doloremque nam
        provident nesciunt repellendus unde temporibus cupiditate officia molestias laboriosam id, rerum totam! Officia,
        eius voluptatum doloribus modi nihil commodi ipsum explicabo, ipsam incidunt cumque nam reprehenderit. Nisi
        culpa ratione et eligendi labore! Alias maxime, commodi, eius praesentium distinctio, cumque debitis voluptatum
        necessitatibus fugit obcaecati nihil beatae aspernatur sequi sunt in est! Officia cupiditate adipisci quibusdam
        tenetur ab facere rerum iusto doloribus delectus, vero ducimus ullam fugiat asperiores omnis ratione possimus
        culpa? Aliquid distinctio sit inventore natus sint alias iure quae adipisci praesentium nihil. Nobis possimus
        deserunt nesciunt vitae quaerat iste perspiciatis pariatur iusto ex? Ipsa quaerat, rerum voluptatem praesentium
        hic laborum sit nesciunt atque magni quas quis unde. Vitae odit, nulla aperiam saepe, deserunt veritatis magni
        est sint non modi voluptatem harum quas iste itaque porro iusto aspernatur repellat? Inventore in possimus
        tempore accusantium dolorum hic sequi placeat pariatur aspernatur molestias nam praesentium mollitia quibusdam,
        tenetur nesciunt quo? Totam, repudiandae optio! Eius vel culpa cumque, veritatis quas consectetur facere rerum
        nostrum nisi ducimus modi temporibus iste perferendis alias qui ex mollitia, officiis voluptas. Molestiae,
        deserunt repellat ut laborum nemo repudiandae esse quo vitae error quae odit libero asperiores alias ullam
        sapiente! Sequi laborum, modi odit harum aliquid porro molestias, expedita voluptates cum repudiandae iste illo?
        Ipsam nostrum provident mollitia et voluptates ipsa laborum assumenda deleniti reprehenderit ipsum quos ex
        nihil, omnis officiis dolor reiciendis eligendi corporis labore. Doloribus asperiores quae dolor tempore
        perferendis fugit, est minima id error suscipit excepturi accusamus corrupti, quam distinctio doloremque
        obcaecati placeat autem voluptates aliquam similique facere dolores? Similique repudiandae molestias ut rem.
        Minima aspernatur blanditiis aperiam commodi. Repudiandae magni soluta adipisci ipsum hic sed temporibus
        accusantium nobis omnis obcaecati error perferendis ut fugiat cupiditate praesentium numquam, officia
        aspernatur! Aperiam reiciendis ipsum beatae, dignissimos at placeat ex fugit repellendus mollitia, molestiae ea
        rem soluta velit qui voluptatibus rerum blanditiis maiores quis hic cum facilis labore. Aspernatur beatae saepe
        dolores placeat voluptatum facere nemo optio fugit labore vitae corrupti earum repellendus, voluptates itaque
        quasi doloribus incidunt in fuga aut laboriosam, id deserunt quidem. Dicta nulla ipsam est aut, pariatur nemo
        dolorem officia quae eos, odio cupiditate recusandae incidunt quisquam expedita culpa qui. Architecto reiciendis
        totam quos repellendus blanditiis fugiat enim consequuntur, earum quaerat. Repellendus repellat placeat quos
        laudantium sed et velit temporibus maxime repudiandae quas consequatur, odio illo nostrum tempora! Aliquid
        itaque odio cupiditate delectus, illo inventore exercitationem veniam quis explicabo. Tenetur veniam vel
        incidunt amet, aliquam, deleniti possimus quibusdam magnam maxime minima nam eveniet eos beatae deserunt harum
        nobis repudiandae eaque. Delectus velit voluptates molestiae. Eveniet repudiandae beatae adipisci assumenda
        atque obcaecati perspiciatis aut commodi neque repellendus? Similique suscipit perspiciatis repellat quae, earum
        nam eum vero hic labore id in sunt commodi iure saepe dolor, repellendus error distinctio? Exercitationem odit,
        voluptatum ea blanditiis eligendi enim soluta consectetur saepe quisquam dolorum. Cum et dignissimos aliquam sed
        ipsam veniam odio, neque a dolorum, rerum quas totam.</p>
    </template>

    <template v-slot:modal_footer>
      <p>------------ modal footer ------------</p>
    </template>

  </Modal>
</template>
