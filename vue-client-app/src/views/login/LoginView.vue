<script setup>
import LoginService from '@/services/LoginService';

    const data = {username : "admin@gmail.com", password : "Admin@123"};
    LoginService.login(data);
</script>