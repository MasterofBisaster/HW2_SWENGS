from django.db import models


# Create your models here.
class OEM(models.Model):
    name = models.TextField()
    ceo = models.TextField(null=True)
    employeeCount = models.PositiveIntegerField(null=True)
    dateOfFounding = models.DateField(null=True)
    stockIndexName = models.CharField(max_length=4)

    class Meta:
        verbose_name_plural = "OEMs"

    def __str__(self):
        return self.name


class CPU(models.Model):
    CHOICES = (
        ('u', 'Unlocked'),
        ('l', 'Locked')
    )

    name = models.TextField()
    coremultiplier = models.CharField(max_length=1, choices=CHOICES)
    release_date = models.DateField()
    price = models.PositiveIntegerField(help_text="in Euros")
    manufacturer = models.ForeignKey(OEM, on_delete=models.CASCADE)
    status = models.BooleanField(default=True)
    memorySupport = models.ManyToManyField('MemoryType', blank=True)

    class Meta:
        verbose_name_plural = "CPUs"

    def __str__(self):
        return self.name
    # TODO: implement __str__ method


class MemoryType(models.Model):
    name = models.TextField()
    oem = models.ForeignKey(OEM, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name
    # TODO: implement __str__ method
