from django.db import models

class Service(models.Model):
    service_name = models.CharField(max_length=255, verbose_name="Услуга")
    service_description = models.TextField(verbose_name="Описание услуги")
    service_image = models.ImageField(upload_to="service_images/", verbose_name="Картинка услуги")

    def __str__(self):
        return self.service_name

class Option(models.Model):
    service = models.ForeignKey(Service, related_name='options', on_delete=models.CASCADE, verbose_name="Услуга")
    option_name = models.CharField(max_length=255, verbose_name="Опция")
    options_description = models.TextField(verbose_name="Описание опции")
    option_image = models.ImageField(upload_to='option_imafes/', verbose_name="Картинка опции")

    def __str__(self):
        return self.option_name
