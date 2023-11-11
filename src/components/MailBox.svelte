<script lang="ts">
    import { createForm } from 'felte';
    import { toast } from '@zerodevx/svelte-toast'
    import { validator } from '@felte/validator-zod';
    import { z } from 'zod';
    import Dialog from './Dialog.svelte'
	
    let dialog: HTMLDialogElement
    const defaultData = {
        name: undefined,
        email: undefined,
        phone: undefined,
        advise: undefined,
    }

    const phoneRegex = new RegExp(
        /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
    );

    const schema = z.object({
        name: z.string().min(1, { message: "此欄位必填" }),         
        email: z.string().min(1, { message: "此欄位必填" }).email({message: "無效的Email"}),         
        phone: z.string().min(1, { message: "此欄位必填" }).regex(phoneRegex, '無效的手機號碼'),         
        advise: z.string().min(1, { message: "此欄位必填" }),
    })

    

  const { form, errors, data, setFields, isValid, isDirty } = createForm({
    initialValues: { ...defaultData },
    extend: [validator({ schema })],
    onSubmit: () => {
        // toast.push('已收到您的意見回饋！')
        dialog.showModal()
    }
  });

  const handleClose = () => {
    dialog.close()
  }
</script>

<div id="mailBox" class="wrapper bg-secondary-gray">
    <div class="container flex justify-between p-10">
        <div class="flex flex-col items-center w-1/2">
            <img src="/svg/mail.svg" alt="title">
            <div class="w-2/3 text-center cus-text-h4">
                <p class="py-4">您的聲音，我們的行動！</p>
                <p>親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！</p>
            </div>
        </div>
        <div>
           <form use:form class="flex flex-col items-center pt-6">
                <div class="form-field">
                    <input name="name" placeholder="您的姓名" type="text" />
                    <span class="field-eror">
                        {#if !!$errors.name}
                            {$errors.name[0]}
                        {/if}
                    </span>
                </div>
                <div class="form-field">
                    <input name="email" placeholder="您的Email" type="text" />
                    <span class="field-eror">
                        {#if !!$errors.email}
                            {$errors.email[0]}
                        {/if}
                    </span>
                </div>
                <div class="form-field">
                    <input name="phone" placeholder="您的手機" type="text" />
                    <span class="field-eror">
                        {#if !!$errors.phone}
                            {$errors.phone[0]}
                        {/if}
                    </span>
                </div>
                <div class="form-field text-area">
                    <textarea class="w-full h-full" placeholder="您的建言" maxlength="100" name="advise" />
                </div>
                <button class="btn w-[176px] h-[82px]">送出意見</button>
           </form> 
        </div>
    </div>
</div>
<Dialog bind:dialog>
    <div class="bg-white rounded-[100px] p-10 w-[600px] h-[400px] flex flex-col items-center">
        <h3 class="py-4 text-center cus-text-h4">感謝您抽出寶貴的時間給予我們寶貴的建議。</h3>
        <p class="cus-text-h6">我們非常重視您的意見，它是我們不斷改進和提升服務的動力。您提出的建議已經轉交給相關部門進行評估，我們將努力在未來的服務中加以考慮和實施。</p>
        <button on:click={handleClose} class="border-2 hover:opacity-80 text-primary mt-8 cus-text-h3 flex items-center justify-center rounded-[100px] border-primary w-[176px] h-[82px]">返回</button>
    </div>
</Dialog>

<style lang="postcss"> 
    .form-field {
       @apply w-[360px]
       h-[50px]
       rounded-md
       mb-6
       border
       bg-white
       border-secondary-darkGray
       text-secondary-darkGray
       relative
       p-3;     
    }
    .field-eror {
        @apply absolute
        left-1
        text-sm
        -bottom-6
        text-red-600
    }
    .text-area {
      @apply h-[100px];
    }
</style>
