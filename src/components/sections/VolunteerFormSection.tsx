import { useTranslation } from 'react-i18next';

export default function VolunteerFormSection() {
  const { t } = useTranslation();
  return (
    <div className="bg-mist-50 p-8 md:p-10">
      <h2 className="font-display text-2xl text-jungle-900">{t('form.title')}</h2>
      <p className="mt-2 font-body text-sm text-jungle-900/60">
        {t('form.subtitle')}
      </p>
      <form
        action="https://formsubmit.co/volunteering@costaricaanimalrescuecenter.org"
        method="POST"
        className="mt-6 flex flex-col gap-4"
      >
        <input type="hidden" name="_subject" value={t('form.subject')} />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="text"
          name="nombre"
          required
          placeholder={t('form.nombre')}
          className="rounded-lg border border-jungle-900/20 px-4 py-3 font-body text-sm"
        />
        <input
          type="email"
          name="email"
          required
          placeholder={t('form.email')}
          className="rounded-lg border border-jungle-900/20 px-4 py-3 font-body text-sm"
        />
        <div className="flex gap-3">
          <select
            name="pais"
            className="w-32 rounded-lg border border-jungle-900/20 px-3 py-3 font-body text-sm"
          >
            <option value="">{t('form.paisCode')}</option>
            <option value="+1">🇺🇸 +1</option>
            <option value="+44">🇬🇧 +44</option>
            <option value="+49">🇩🇪 +49</option>
            <option value="+34">🇪🇸 +34</option>
            <option value="+52">🇲🇽 +52</option>
            <option value="+506">🇨🇷 +506</option>
            <option value="+51">🇵🇪 +51</option>
            <option value="+56">🇨🇱 +56</option>
            <option value="+54">🇦🇷 +54</option>
            <option value="+57">🇨🇴 +57</option>
            <option value="+58">🇻🇪 +58</option>
            <option value="+593">🇪🇨 +593</option>
            <option value="+591">🇧🇴 +591</option>
            <option value="+505">🇳🇮 +505</option>
            <option value="+507">🇵🇦 +507</option>
            <option value="+504">🇭🇳 +504</option>
            <option value="+503">🇸🇻 +503</option>
            <option value="+502">🇬🇹 +502</option>
            <option value="+1">🇨🇦 +1</option>
            <option value="+61">🇦🇺 +61</option>
            <option value="+64">🇳🇿 +64</option>
            <option value="+81">🇯🇵 +81</option>
            <option value="+86">🇨🇳 +86</option>
            <option value="+55">🇧🇷 +55</option>
            <option value="+39">🇮🇹 +39</option>
            <option value="+33">🇫🇷 +33</option>
            <option value="+31">🇳🇱 +31</option>
            <option value="+48">🇵🇱 +48</option>
            <option value="+351">🇵🇹 +351</option>
            <option value="+47">🇳🇴 +47</option>
            <option value="+46">🇸🇪 +46</option>
            <option value="+41">🇨🇭 +41</option>
            <option value="+353">🇮🇪 +353</option>
            <option value="+43">🇦🇹 +43</option>
            <option value="+32">🇧🇪 +32</option>
            <option value="+45">🇩🇰 +45</option>
            <option value="+358">🇫🇮 +358</option>
            <option value="+972">🇮🇱 +972</option>
            <option value="+971">🇦🇪 +971</option>
            <option value="+966">🇸🇦 +966</option>
            <option value="+27">🇿🇦 +27</option>
          </select>
          <input
            type="tel"
            name="whatsapp"
            placeholder={t('form.whatsapp')}
            className="flex-1 rounded-lg border border-jungle-900/20 px-4 py-3 font-body text-sm"
          />
        </div>
        <select
          name="dieta"
          className="rounded-lg border border-jungle-900/20 px-4 py-3 font-body text-sm"
        >
          <option value="">{t('form.dieta')}</option>
          <option>{t('form.dietaRegular')}</option>
          <option>{t('form.dietaVegetariana')}</option>
          <option>{t('form.dietaVegana')}</option>
          <option>{t('form.dietaLibreGluten')}</option>
        </select>
        <input
          type="text"
          name="alergias"
          placeholder={t('form.alergias')}
          className="rounded-lg border border-jungle-900/20 px-4 py-3 font-body text-sm"
        />
        <input
          type="number"
          name="personas"
          min="1"
          placeholder={t('form.personas')}
          className="rounded-lg border border-jungle-900/20 px-4 py-3 font-body text-sm"
        />
        <button
          type="submit"
          className="mt-2 rounded-full bg-leaf-500 px-6 py-3 font-body font-medium text-mist-50 transition-transform hover:scale-105"
        >
          {t('form.enviar')}
        </button>
      </form>
    </div>
  );
}
