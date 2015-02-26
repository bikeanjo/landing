from importd import d
from models import Mailing


@d("^fhurl/$")
class MailingForm(d.RequestForm):
    email = d.forms.EmailField()

    def save(self):
        email = self.cleaned_data['email']
        Mailing.objects.create(email=email)
        return email
