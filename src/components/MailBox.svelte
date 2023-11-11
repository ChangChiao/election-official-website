<script lang="ts">
    import { createForm } from 'felte';
    import { validator } from '@felte/validator-zod';
    import { z } from 'zod';
    const defaultData = {
        name: '',
        email: '',
        phone: '',
        advise: '',
    }

    const phoneRegex = new RegExp(
        /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
    );

    const schema = z.object({
        name: z.string({required_error: '此欄位必填'}),
        email: z.string({required_error: '此欄位必填'}).email(),
        phone: z.string({required_error: '此欄位必填'}).regex(phoneRegex, '無效的手機號碼'),
        advise: z.string({required_error: '此欄位必填'}),
    })

  const { form, errors, data, setFields, isValid, isDirty } = createForm({
    initialValues: { ...defaultData },
    extend: [validator({ schema })],
    onSubmit: () => {}
  });
</script>

<div class="wrapper bg-secondary-gray">
    <div class="container flex justify-between">
        <div>
            <img src="/svg/mail.svg" alt="title">
            <div class="body-md">
                <p>您的聲音，我們的行動！</p>
                <p>親愛的鄉親，每一位市民的意見都是我們社區前進的原動力。無論大小事，我都誠摯希望聽到您的建議。分享您的想法，一同為我們的未來打造更美好！</p>
            </div>
        </div>
        <div>
           <form use:form>
                <div class="form-field">
                    <input name="name" type="text" />
                    <span>
                        {#if !!$errors.name}
                            {$errors.name}
                        {/if}
                    </span>
                </div>
                <div class="form-field">
                    <input name="email" type="text" />
                    <span>
                        {#if !!$errors.email}
                            {$errors.email}
                        {/if}
                    </span>
                </div>
                <div class="form-field">
                    <input name="phone" type="text" />
                    <span>
                        {#if !!$errors.phone}
                            {$errors.phone}
                        {/if}
                    </span>
                </div>
                <div class="form-field">
                    <textarea name="advise" />
                    <span>
                        {#if !!$errors.phone}
                            {$errors.phone}
                        {/if}
                    </span>
                </div>
           </form> 
        </div>
    </div>
</div>

<style lang="postcss"> 
    .form-field {
       @apply w-full
       rounded-md
       border
       bg-white
       border-secondary-darkGray
       text-secondary-darkGray
       p-3;     
    }
</style>
